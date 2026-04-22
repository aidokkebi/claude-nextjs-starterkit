// ================================================================
// [복사 위치] types/next-auth.d.ts
// [사전 준비] tsconfig.json의 include에 "types/**/*.d.ts" 포함 여부 확인
// ================================================================
import { DefaultSession } from "next-auth"

// Auth.js 기본 타입에 커스텀 필드(id, role) 추가
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: string
    } & DefaultSession["user"]
  }

  interface User {
    role: string
  }
}
