# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 명령어

```bash
pnpm dev              # 개발 서버
pnpm build            # 프로덕션 빌드
pnpm lint             # ESLint
pnpm tsc --noEmit     # 타입 검사

# Prisma
pnpm db:generate      # Prisma 클라이언트 생성
pnpm db:push          # 마이그레이션 없이 스키마 동기화 (개발용)
pnpm db:migrate       # 마이그레이션 생성 및 실행
pnpm db:studio        # Prisma Studio GUI

# shadcn/ui 컴포넌트 추가
pnpm dlx shadcn add [컴포넌트명]
```

## 아키텍처

### templates/ 패턴

이 프로젝트의 핵심 설계 결정. `templates/`는 **실행 코드가 아닌 복사용 템플릿**이다.

- `tsconfig.json`의 `exclude`에 `"templates"`가 포함되어 TypeScript 컴파일 대상이 아님
- 개발자는 필요한 파일을 `app/` 또는 `lib/`로 복사해서 사용
- `templates/auth/` → `lib/auth.ts`, `app/api/auth/[...nextauth]/route.ts`, `app/login/page.tsx` 등으로 복사
- `templates/database/prisma.ts` → `lib/prisma.ts`로 복사
- `templates/payment/payment-route.ts` → `app/api/payment/route.ts`로 복사

따라서 `templates/` 파일의 이슈는 "실행 중인 코드"가 아닌 "참고 템플릿"으로 평가해야 한다.

### 레이아웃 구조

`app/layout.tsx` → `<Providers>` → `<Header>` + `<main>` + `<Footer>`

- `components/providers.tsx`: next-themes `ThemeProvider` 래퍼 ("use client"). 다크모드 토글 기능을 사용하려면 이 컴포넌트를 거쳐야 함
- `components/layout/Header.tsx`: "use client" 컴포넌트. `useTheme()` 훅으로 다크모드 전환, shadcn `Sheet`로 모바일 메뉴 구현
- Tailwind v4 다크모드는 `@custom-variant dark (&:is(.dark *))` 방식 — `.dark` 클래스가 `<html>`에 붙으면 활성화됨

### Prisma 7 주의사항

Prisma 7부터 datasource URL이 `schema.prisma`가 아닌 `prisma.config.ts`에서 관리된다.

```ts
// prisma.config.ts — URL은 여기서만 설정
datasource: { url: env("DATABASE_URL") }
```

Prisma 클라이언트 생성 위치도 변경됨: `app/generated/prisma` (표준 `node_modules/.prisma/client` 아님). import 시 주의:
```ts
import { PrismaClient } from "@/app/generated/prisma"
```

### Next.js 16 Breaking Changes

`error.tsx`의 prop이 변경됨 — `reset` 대신 `unstable_retry` 사용:
```tsx
// ❌ v13/14 방식
export default function Error({ error, reset }: { reset: () => void })

// ✅ v16 방식
export default function Error({ error, unstable_retry }: { unstable_retry: () => void })
```

### Tailwind CSS v4

`@tailwind base/components/utilities` 지시어 없음. 대신:
```css
@import "tailwindcss";
```
설정은 `tailwind.config.js` 파일이 없고, `app/globals.css`의 `@theme inline` 블록에서 관리된다.

### 폰트 시스템

`app/layout.tsx`에서 `next/font/google`으로 Geist Sans/Mono를 로드한 뒤, `app/globals.css`의 `@theme inline`에 CSS 변수로 연결된다:

```css
/* @theme inline 내부 */
--font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
--font-mono: var(--font-geist-mono), ui-monospace, monospace;
```

새 폰트를 추가할 때도 `@theme inline`에 등록해야 Tailwind `font-sans` 등의 유틸리티가 정상 동작한다.

### 커스텀 훅 SSR 패턴

`hooks/` 디렉토리의 훅은 모두 `"use client"`지만 SSR 환경(hydration 중)에서 `window`에 접근하면 오류가 발생한다. `useState` lazy initializer에서 `typeof window === "undefined"` 가드를 사용한다:

```ts
const [value, setValue] = useState(() => {
  if (typeof window === "undefined") return defaultValue
  // window 접근 로직
})
```

`useEffect` 내에서 동기적으로 `setState`를 호출하면 ESLint `react-hooks/set-state-in-effect` 오류가 발생한다 — lazy initializer로 대체해야 한다.

## 환경 변수

`.env.example` 참고. 필수 변수:
- `DATABASE_URL` — Supabase PostgreSQL 연결 문자열
- `AUTH_SECRET` — `npx auth secret`으로 생성
- `AUTH_KAKAO_ID` / `AUTH_KAKAO_SECRET`
- `AUTH_NAVER_ID` / `AUTH_NAVER_SECRET`
- `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET`
- `TOSS_CLIENT_KEY` / `TOSS_SECRET_KEY`
