import "dotenv/config"
import { defineConfig, env } from "prisma/config"

// Prisma 7 설정 파일
// 데이터베이스 연결 URL을 여기서 관리해요 (schema.prisma에서 분리됨)
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
})
