// ================================================================
// [복사 위치] app/api/payment/route.ts
// [사전 준비] .env에 TOSS_CLIENT_KEY, TOSS_SECRET_KEY 값 입력
// ================================================================
import { NextRequest, NextResponse } from "next/server"

// 토스페이먼츠 결제 승인 API
// 결제 완료 후 프론트에서 이 API를 호출해서 최종 승인을 받아요
export async function POST(req: NextRequest) {
  // 입력값 파싱 및 타입 검증
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "잘못된 요청 형식" }, { status: 400 })
  }

  if (
    typeof body !== "object" ||
    body === null ||
    typeof (body as Record<string, unknown>).paymentKey !== "string" ||
    typeof (body as Record<string, unknown>).orderId !== "string" ||
    typeof (body as Record<string, unknown>).amount !== "number"
  ) {
    return NextResponse.json({ error: "필수 파라미터가 누락되었습니다" }, { status: 400 })
  }

  const { paymentKey, orderId, amount } = body as {
    paymentKey: string
    orderId: string
    amount: number
  }

  // TODO: DB에서 실제 주문 금액과 대조해 금액 위변조를 반드시 방지하세요
  // const order = await prisma.order.findUnique({ where: { id: orderId } })
  // if (!order || order.amount !== amount) {
  //   return NextResponse.json({ error: "금액이 일치하지 않습니다" }, { status: 400 })
  // }

  const secretKey = process.env.TOSS_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json({ error: "결제 설정 오류" }, { status: 500 })
  }

  // 토스페이먼츠 API 호출 (Base64로 인코딩된 시크릿 키 사용)
  const encryptedSecretKey = Buffer.from(`${secretKey}:`).toString("base64")

  try {
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
  } catch (error) {
    console.error("토스페이먼츠 API 호출 실패:", error)
    return NextResponse.json({ error: "결제 서버 연결 오류" }, { status: 502 })
  }
}
