"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
      <h2 className="text-2xl font-semibold">오류가 발생했습니다</h2>
      <p className="text-muted-foreground max-w-md">
        {error.message || "예기치 않은 오류가 발생했습니다. 다시 시도해 주세요."}
      </p>
      <Button onClick={() => unstable_retry()}>다시 시도</Button>
    </div>
  )
}
