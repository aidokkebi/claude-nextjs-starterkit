"use client"

import { signIn } from "next-auth/react"

// 카카오, 네이버, 구글 로그인 버튼이 있는 로그인 페이지
export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="border border-border rounded-xl p-8 bg-card shadow-sm">
          <h1 className="text-2xl font-bold text-center text-card-foreground mb-2">
            로그인
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            소셜 계정으로 간편하게 로그인하세요
          </p>

          <div className="flex flex-col gap-3">
            {/* 카카오 로그인 버튼 */}
            <button
              onClick={() => signIn("kakao", { callbackUrl: "/dashboard" })}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors"
              style={{ backgroundColor: "#FEE500", color: "#000000" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 0C4.029 0 0 3.134 0 7C0 9.387 1.537 11.494 3.868 12.756L2.944 16.222C2.875 16.49 3.175 16.703 3.408 16.544L7.53 13.878C8.012 13.926 8.503 13.951 9 13.951C13.971 13.951 18 10.817 18 6.951C18 3.085 13.971 0 9 0Z"
                  fill="black"
                  fillOpacity="0.85"
                />
              </svg>
              카카오로 로그인
            </button>

            {/* 네이버 로그인 버튼 */}
            <button
              onClick={() => signIn("naver", { callbackUrl: "/dashboard" })}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors text-white"
              style={{ backgroundColor: "#03C75A" }}
            >
              <span className="font-bold text-lg leading-none">N</span>
              네이버로 로그인
            </button>

            {/* 구분선 */}
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">또는</span>
              </div>
            </div>

            {/* 구글 로그인 버튼 */}
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-border bg-background hover:bg-accent transition-colors font-medium"
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path
                  d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
                  fill="#4285F4"
                />
                <path
                  d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"
                  fill="#34A853"
                />
                <path
                  d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z"
                  fill="#EA4335"
                />
              </svg>
              구글로 로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
