import Link from "next/link"
import { ArrowRight, Shield, Zap, CreditCard } from "lucide-react"

// 홈페이지 - 서비스 소개 랜딩 페이지
export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* 히어로 섹션 */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold text-foreground mb-6">
          빠르게 시작하는
          <br />
          <span className="text-primary">한국형 웹 서비스</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          카카오, 네이버, 구글 로그인과 토스페이먼츠 결제가 이미 준비된
          Next.js 스타터킷입니다.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            시작하기
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors font-medium"
          >
            로그인
          </Link>
        </div>
      </div>

      {/* 기능 소개 카드 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border border-border rounded-xl bg-card">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-card-foreground mb-2">
            소셜 로그인
          </h3>
          <p className="text-muted-foreground">
            카카오, 네이버, 구글 로그인이 이미 설정되어 있어요. 한국 사용자가
            편하게 가입할 수 있어요.
          </p>
        </div>

        <div className="p-6 border border-border rounded-xl bg-card">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-card-foreground mb-2">
            빠른 개발
          </h3>
          <p className="text-muted-foreground">
            Next.js 16 + TypeScript + Tailwind CSS + shadcn/ui로 빠르고 예쁜
            UI를 만들 수 있어요.
          </p>
        </div>

        <div className="p-6 border border-border rounded-xl bg-card">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <CreditCard className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-card-foreground mb-2">
            한국 결제
          </h3>
          <p className="text-muted-foreground">
            토스페이먼츠 연동이 준비되어 있어요. 한국 사용자가 익숙한 결제
            방식을 사용할 수 있어요.
          </p>
        </div>
      </div>
    </div>
  )
}
