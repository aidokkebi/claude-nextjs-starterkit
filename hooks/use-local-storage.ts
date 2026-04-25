"use client"

import { useCallback, useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item !== null) setStoredValue(JSON.parse(item))
    } catch {
      // localStorage 접근 불가 시 초기값 유지
    }
  }, [key])

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch {
      // localStorage 쓰기 실패 시 메모리 상태만 업데이트
    }
  }, [key, storedValue])

  return [storedValue, setValue] as const
}
