import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { SessionProvider } from "next-auth/react"
import { Header } from "@/components/layout/Header"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "스타터킷 | 한국 서비스",
  description: "Next.js 기반 한국 서비스 스타터킷",
}

// 루트 레이아웃 - 모든 페이지를 감싸는 최상위 컴포넌트
// SessionProvider로 감싸야 useSession() 훅을 어디서든 사용할 수 있어요
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SessionProvider>
          <Header />
          <main className="flex-1">{children}</main>
        </SessionProvider>
      </body>
    </html>
  )
}
