// ================================================================
// [복사 위치] app/api/auth/[...nextauth]/route.ts
// [사전 준비] lib/auth.ts 가 존재해야 합니다
// ================================================================
import { handlers } from "@/lib/auth"

// Auth.js의 GET/POST 요청을 처리하는 라우트 핸들러
// 로그인, 로그아웃, 콜백 등 모든 인증 요청이 여기로 들어와요
export const { GET, POST } = handlers
