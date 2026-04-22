// ================================================================
// [복사 위치] app/dashboard/page.tsx (또는 원하는 보호 페이지 경로)
// [사전 준비] lib/auth.ts 가 존재해야 합니다
// ================================================================
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { User, CreditCard, Settings } from "lucide-react"

// 로그인한 사용자만 볼 수 있는 대시보드 페이지
// 로그인이 안 되어 있으면 자동으로 로그인 페이지로 이동해요
export default async function DashboardPage() {
  const session = await auth()

  // 로그인 안 된 경우 로그인 페이지로 이동
  if (!session) {
    redirect("/login")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* 환영 메시지 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          안녕하세요, {session.user?.name ?? "사용자"}님! 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          {session.user?.email}
        </p>
      </div>

      {/* 대시보드 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-border rounded-xl bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground">내 프로필</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            프로필 정보를 확인하고 수정할 수 있어요.
          </p>
        </div>

        <div className="p-6 border border-border rounded-xl bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground">결제 내역</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            토스페이먼츠 결제 내역을 확인할 수 있어요.
          </p>
        </div>

        <div className="p-6 border border-border rounded-xl bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-card-foreground">설정</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            서비스 설정을 변경할 수 있어요.
          </p>
        </div>
      </div>

      {/* 세션 정보 (개발 환경에서만 표시) */}
      {process.env.NODE_ENV === "development" && (
        <div className="mt-8 p-4 border border-border rounded-lg bg-muted/50">
          <p className="text-xs text-muted-foreground mb-2 font-mono">
            [개발용] 현재 세션 정보:
          </p>
          <pre className="text-xs text-foreground overflow-auto">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
