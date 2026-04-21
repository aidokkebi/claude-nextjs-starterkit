import { handlers } from "@/auth"

// Auth.js의 GET/POST 요청을 처리하는 라우트 핸들러
// 로그인, 로그아웃, 콜백 등 모든 인증 요청이 여기로 들어와요
export const { GET, POST } = handlers
