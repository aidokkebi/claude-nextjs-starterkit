"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { LogIn, LogOut } from "lucide-react"

// 로그인/로그아웃 상태에 따라 버튼이 바뀌는 컴포넌트
export function LoginButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
      >
        <LogOut className="w-4 h-4" />
        로그아웃
      </button>
    )
  }

  return (
    <button
      onClick={() => signIn()}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
    >
      <LogIn className="w-4 h-4" />
      로그인
    </button>
  )
}
