import { NextRequest, NextResponse } from "next/server"

// 토스페이먼츠 결제 승인 API
// 결제 완료 후 프론트에서 이 API를 호출해서 최종 승인을 받아요
export async function POST(req: NextRequest) {
  const { paymentKey, orderId, amount } = await req.json()

  const secretKey = process.env.TOSS_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json({ error: "결제 설정 오류" }, { status: 500 })
  }

  // 토스페이먼츠 API 호출 (Base64로 인코딩된 시크릿 키 사용)
  const encryptedSecretKey = Buffer.from(`${secretKey}:`).toString("base64")

  const response = await fetch(
    "https://api.tosspayments.com/v1/payments/confirm",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${encryptedSecretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentKey, orderId, amount }),
    }
  )

  const data = await response.json()

  if (!response.ok) {
    return NextResponse.json(
      { error: data.message || "결제 승인 실패" },
      { status: response.status }
    )
  }

  return NextResponse.json(data)
}
