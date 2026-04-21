import Link from "next/link"
import { LoginButton } from "@/components/auth/LoginButton"

// 모든 페이지 상단에 표시되는 헤더 컴포넌트
export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link
            href="/"
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            🚀 스타터킷
          </Link>

          {/* 네비게이션 */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              홈
            </Link>
            <Link
              href="/dashboard"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              대시보드
            </Link>
          </nav>

          {/* 로그인/로그아웃 버튼 */}
          <LoginButton />
        </div>
      </div>
    </header>
  )
}
