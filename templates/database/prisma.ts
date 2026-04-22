// ================================================================
// [복사 위치] lib/prisma.ts
// [사전 준비]
//   1. .env에 DATABASE_URL 값 입력
//   2. pnpm db:generate 실행 (Prisma 클라이언트 생성)
// ================================================================
import { PrismaClient } from "@/app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

// PostgreSQL 어댑터 설정 - Prisma 7에서 필수
const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  throw new Error("DATABASE_URL 환경변수가 설정되지 않았습니다. .env.example을 참고하세요.")
}

const adapter = new PrismaPg({ connectionString })

// Prisma 클라이언트를 하나만 만들어서 재사용하는 패턴
// 개발 중에 Hot Reload 때마다 새 연결이 생기는 것을 방지해요
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ adapter })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
