import { Shield, Database, CreditCard, Copy } from "lucide-react"

// 템플릿 목록 페이지 - 각 템플릿의 사용법과 복사 경로를 안내해요
export default function TemplatesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">📦 템플릿 목록</h1>
        <p className="text-muted-foreground">
          새 서비스 개발 시 <code className="bg-muted px-1.5 py-0.5 rounded text-sm">templates/</code> 폴더의 파일을 복사해서 사용하세요.
        </p>
      </div>

      {/* 인증 템플릿 */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-semibold text-foreground">인증 / 로그인</h2>
        </div>
        <div className="border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">템플릿 파일</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">복사 위치</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">설명</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="bg-card">
                <td className="px-4 py-3"><code className="text-blue-500">templates/auth/auth.ts</code></td>
                <td className="px-4 py-3"><code className="text-muted-foreground">lib/auth.ts</code></td>
                <td className="px-4 py-3 text-muted-foreground">Auth.js 설정 (카카오/네이버/구글)</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3"><code className="text-blue-500">templates/auth/route.ts</code></td>
                <td className="px-4 py-3"><code className="text-muted-foreground">app/api/auth/[...nextauth]/route.ts</code></td>
                <td className="px-4 py-3 text-muted-foreground">Auth API 핸들러</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3"><code className="text-blue-500">templates/auth/login-page.tsx</code></td>
                <td className="px-4 py-3"><code className="text-muted-foreground">app/login/page.tsx</code></td>
                <td className="px-4 py-3 text-muted-foreground">소셜 로그인 페이지</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3"><code className="text-blue-500">templates/auth/protected-page.tsx</code></td>
                <td className="px-4 py-3"><code className="text-muted-foreground">app/dashboard/page.tsx</code></td>
                <td className="px-4 py-3 text-muted-foreground">로그인 보호 페이지 예시</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3"><code className="text-blue-500">templates/auth/LoginButton.tsx</code></td>
                <td className="px-4 py-3"><code className="text-muted-foreground">components/auth/LoginButton.tsx</code></td>
                <td className="px-4 py-3 text-muted-foreground">로그인/로그아웃 버튼 컴포넌트</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg text-sm text-muted-foreground">
          <strong className="text-foreground">필요한 환경변수:</strong>{" "}
          AUTH_SECRET, AUTH_KAKAO_ID, AUTH_KAKAO_SECRET, AUTH_NAVER_ID, AUTH_NAVER_SECRET, AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET
        </div>
      </section>

      {/* 데이터베이스 템플릿 */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Database className="w-5 h-5 text-green-500" />
          <h2 className="text-xl font-semibold text-foreground">데이터베이스</h2>
        </div>
        <div className="border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">템플릿 파일</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">복사 위치</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">설명</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="bg-card">
                <td className="px-4 py-3"><code className="text-green-500">templates/database/prisma.ts</code></td>
                <td className="px-4 py-3"><code className="text-muted-foreground">lib/prisma.ts</code></td>
                <td className="px-4 py-3 text-muted-foreground">Prisma 클라이언트 싱글톤</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3"><code className="text-green-500">templates/database/schema.prisma</code></td>
                <td className="px-4 py-3"><code className="text-muted-foreground">prisma/schema.prisma</code> 참고</td>
                <td className="px-4 py-3 text-muted-foreground">Auth.js 필수 모델 + 커스텀 모델 예시</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 p-3 bg-green-500/5 border border-green-500/20 rounded-lg text-sm text-muted-foreground">
          <strong className="text-foreground">필요한 환경변수:</strong>{" "}
          DATABASE_URL (Supabase 연결 문자열)
          <br />
          <strong className="text-foreground">복사 후 실행:</strong>{" "}
          <code className="bg-muted px-1 rounded">pnpm db:generate</code> →{" "}
          <code className="bg-muted px-1 rounded">pnpm db:push</code>
        </div>
      </section>

      {/* 결제 템플릿 */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="w-5 h-5 text-orange-500" />
          <h2 className="text-xl font-semibold text-foreground">결제</h2>
        </div>
        <div className="border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">템플릿 파일</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">복사 위치</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">설명</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="bg-card">
                <td className="px-4 py-3"><code className="text-orange-500">templates/payment/payment-route.ts</code></td>
                <td className="px-4 py-3"><code className="text-muted-foreground">app/api/payment/route.ts</code></td>
                <td className="px-4 py-3 text-muted-foreground">토스페이먼츠 결제 승인 API</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 p-3 bg-orange-500/5 border border-orange-500/20 rounded-lg text-sm text-muted-foreground">
          <strong className="text-foreground">필요한 환경변수:</strong>{" "}
          TOSS_CLIENT_KEY, TOSS_SECRET_KEY
        </div>
      </section>

      {/* UI 컴포넌트 안내 */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Copy className="w-5 h-5 text-purple-500" />
          <h2 className="text-xl font-semibold text-foreground">UI 컴포넌트 (shadcn/ui)</h2>
        </div>
        <div className="border border-border rounded-xl p-4 bg-card text-sm space-y-2">
          <p className="text-muted-foreground">shadcn/ui 컴포넌트는 필요할 때마다 아래 명령어로 추가하세요.</p>
          <code className="block bg-muted p-3 rounded-lg text-foreground">
            pnpm dlx shadcn add button
            <br />
            pnpm dlx shadcn add card
            <br />
            pnpm dlx shadcn add input
            <br />
            pnpm dlx shadcn add dialog
          </code>
          <p className="text-muted-foreground">추가된 컴포넌트는 <code className="bg-muted px-1 rounded">components/ui/</code> 폴더에 생성돼요.</p>
        </div>
      </section>

    </div>
  )
}
