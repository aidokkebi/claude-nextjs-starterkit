import { Shield, Database, CreditCard, Palette, ArrowRight } from "lucide-react"

// 스타터킷 홈페이지 - 로그인 없이 자유롭게 접근 가능
export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* 히어로 섹션 */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          한국 서비스 개발을 위한
          <br />
          <span className="text-primary">Next.js 스타터킷</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          새 웹 서비스를 시작할 때 필요한 코드 템플릿이 모두 준비되어 있어요.
          <br />
          <code className="bg-muted px-2 py-1 rounded text-sm">/templates</code> 폴더에서 필요한 코드를 꺼내 사용하세요.
        </p>
      </div>

      {/* 준비된 템플릿 목록 */}
      <h2 className="text-xl font-semibold text-foreground mb-6">📦 준비된 템플릿</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

        {/* 인증/로그인 */}
        <div className="p-6 border border-border rounded-xl bg-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">인증 / 로그인</h3>
              <code className="text-xs text-muted-foreground">templates/auth/</code>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            카카오, 네이버, 구글 소셜 로그인. Auth.js v5 기반.
          </p>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> auth.ts — Auth.js 설정</li>
            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> login-page.tsx — 로그인 페이지</li>
            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> protected-page.tsx — 로그인 보호 페이지</li>
            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> route.ts — Auth API 핸들러</li>
          </ul>
        </div>

        {/* 데이터베이스 */}
        <div className="p-6 border border-border rounded-xl bg-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">데이터베이스</h3>
              <code className="text-xs text-muted-foreground">templates/database/</code>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Prisma 7 + Supabase(PostgreSQL) 연결 설정.
          </p>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> prisma.ts — Prisma 클라이언트</li>
            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> schema.prisma — DB 스키마 예시</li>
          </ul>
        </div>

        {/* 결제 */}
        <div className="p-6 border border-border rounded-xl bg-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">결제</h3>
              <code className="text-xs text-muted-foreground">templates/payment/</code>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            토스페이먼츠 연동. 한국 서비스에 최적화.
          </p>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> payment-route.ts — 결제 승인 API</li>
          </ul>
        </div>

        {/* UI 컴포넌트 */}
        <div className="p-6 border border-border rounded-xl bg-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">UI 컴포넌트</h3>
              <code className="text-xs text-muted-foreground">components/ui/</code>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            shadcn/ui + Lucide React. Tailwind CSS v4 기반.
          </p>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> pnpm dlx shadcn add [컴포넌트명]</li>
          </ul>
        </div>
      </div>

      {/* 사용 방법 */}
      <div className="border border-border rounded-xl p-6 bg-muted/30">
        <h2 className="text-lg font-semibold text-foreground mb-4">🚀 새 프로젝트 시작 방법</h2>
        <ol className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-3"><span className="font-bold text-foreground">1.</span> 이 스타터킷을 복사해서 새 프로젝트 폴더 생성</li>
          <li className="flex gap-3"><span className="font-bold text-foreground">2.</span> <code className="bg-muted px-1 rounded">.env.example</code> 을 <code className="bg-muted px-1 rounded">.env</code> 로 복사하고 실제 값 입력</li>
          <li className="flex gap-3"><span className="font-bold text-foreground">3.</span> <code className="bg-muted px-1 rounded">templates/</code> 폴더에서 필요한 코드를 <code className="bg-muted px-1 rounded">app/</code> 으로 복사</li>
          <li className="flex gap-3"><span className="font-bold text-foreground">4.</span> <code className="bg-muted px-1 rounded">pnpm install</code> 후 <code className="bg-muted px-1 rounded">pnpm dev</code> 로 개발 시작!</li>
        </ol>
      </div>
    </div>
  )
}
