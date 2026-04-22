---
name: 프로젝트 아키텍처
description: claude-nextjs-starterkit의 전체 구조, 기술 스택, 설계 결정 사항
type: project
---

Next.js 16.2.4 + React 19 + TypeScript + Tailwind CSS v4 기반 한국형 웹서비스 스타터킷.

**핵심 설계 결정: templates/ 폴더 패턴**
- 실제로 앱에 포함되지 않는 코드는 `templates/` 폴더에 보관
- tsconfig.json의 `exclude`에 `templates`가 포함되어 TypeScript 컴파일 대상 제외
- 사용자가 필요한 파일만 골라 `app/` 또는 `lib/`로 복사해서 사용하는 구조

**기술 스택:**
- 인증: Auth.js v5 (next-auth@5.0.0-beta.31), 카카오/네이버/구글 소셜 로그인
- DB: Prisma 7 + Supabase(PostgreSQL), PrismaPg 어댑터 사용
- Prisma 클라이언트 output: `app/generated/prisma` (app 디렉토리 내부에 생성)
- 결제: 토스페이먼츠 v1 API
- UI: shadcn/ui + Lucide React

**디렉토리 구조:**
- `app/` — Next.js App Router 페이지
- `components/` — 공유 컴포넌트 (현재 layout/Header.tsx만 존재)
- `lib/` — 유틸리티 (utils.ts만 존재, 실제 prisma.ts/auth.ts는 templates에서 복사)
- `templates/auth/`, `templates/database/`, `templates/payment/` — 복사용 템플릿

**Why:** 스타터킷이므로 모든 기능을 기본 포함하지 않고, 사용자가 필요한 것만 선택해서 가져가는 방식으로 설계됨.

**How to apply:** 코드 리뷰 시 templates/ 파일들은 "실제 동작 코드"가 아닌 "참고용 템플릿"임을 감안하여 평가할 것.
