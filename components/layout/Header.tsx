import Link from "next/link"

// 스타터킷 헤더 - 로그인 없이 자유롭게 탐색 가능
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
            🚀 Next.js 스타터킷
          </Link>

          {/* 네비게이션 */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              홈
            </Link>
            <Link href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
              템플릿
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
