// ================================================================
// [복사 위치] lib/auth.ts
// [사전 준비]
//   1. templates/database/prisma.ts → lib/prisma.ts 로 복사
//   2. .env에 AUTH_SECRET, AUTH_KAKAO_ID/SECRET, AUTH_NAVER_ID/SECRET,
//      AUTH_GOOGLE_ID/SECRET 값 입력
//   3. pnpm db:generate && pnpm db:push 실행
// ================================================================
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Kakao from "next-auth/providers/kakao"
import Naver from "next-auth/providers/naver"
import Google from "next-auth/providers/google"
import { prisma } from "@/lib/prisma"

// Auth.js v5 설정 파일
// 카카오, 네이버, 구글 소셜 로그인을 한 곳에서 관리해요
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Kakao,   // 카카오 로그인 (환경변수: AUTH_KAKAO_ID, AUTH_KAKAO_SECRET)
    Naver,   // 네이버 로그인 (환경변수: AUTH_NAVER_ID, AUTH_NAVER_SECRET)
    Google,  // 구글 로그인 (환경변수: AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET)
  ],
  callbacks: {
    // 세션에 사용자 role 정보를 포함시키는 콜백
    session({ session, user }) {
      if (session.user && user) {
        session.user.id = user.id
        // @ts-expect-error role은 커스텀 필드
        session.user.role = user.role
      }
      return session
    },
  },
  pages: {
    signIn: "/login", // 로그인 페이지 경로
  },
})
