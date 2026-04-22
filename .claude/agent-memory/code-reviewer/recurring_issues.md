---
name: 반복 발견 이슈
description: 코드 리뷰에서 반복적으로 발견된 패턴 및 개선 필요 사항
type: feedback
---

첫 번째 리뷰(2026-04-22)에서 발견된 패턴들:

1. **@ts-expect-error로 타입 우회** — auth.ts에서 session.user.role을 `@ts-expect-error`로 처리. Auth.js v5에서는 module augmentation으로 타입을 확장하는 것이 올바른 방법.

2. **API 입력값 검증 누락** — payment-route.ts에서 req.json() 후 paymentKey/orderId/amount 유효성 검사 없이 바로 외부 API 호출. 금액 위변조 방어 로직도 없음.

3. **하드코딩된 callbackUrl** — login-page.tsx에서 signIn() 호출 시 callbackUrl을 "/dashboard"로 하드코딩. 상수화 또는 환경변수 처리 권장.

4. **DATABASE_URL에 non-null assertion** — prisma.ts에서 `process.env.DATABASE_URL!` 사용. 런타임 에러 대신 명시적 검증 권장.

5. **모바일 네비게이션 없음** — Header.tsx의 nav가 `hidden md:flex`로 모바일에서 완전히 숨겨짐. 햄버거 메뉴 등 대안 없음 (스타터킷 특성상 허용 가능).

**Why:** 템플릿 코드이므로 실제 서비스에 복사할 때 이 패턴들이 그대로 옮겨질 위험이 있음.
**How to apply:** 다음 리뷰에서도 동일 패턴 재발 시 우선순위 높게 언급.
