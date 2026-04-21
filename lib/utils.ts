import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// shadcn/ui에서 클래스명을 합치는 유틸 함수
// 예: cn("px-4", isActive && "bg-blue-500") → 조건부 클래스 적용
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
