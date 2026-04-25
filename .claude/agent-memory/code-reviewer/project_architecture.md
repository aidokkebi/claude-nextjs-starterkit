---
name: 프로젝트 설계 철학
description: claude-nextjs-starterkit의 templates/ 패턴 설계 의도 (코드에서 읽을 수 없는 비공개 맥락)
type: project
---

**핵심 설계 결정: templates/ 폴더 패턴**

이 프로젝트는 모든 기능을 기본 포함하지 않는다. 인증/DB/결제 등 선택적 기능은 `templates/` 폴더에 보관되고, 사용자가 필요한 파일만 골라 `app/` 또는 `lib/`로 복사해서 사용한다. `templates/`는 `tsconfig.json`의 `exclude`에 포함되어 TypeScript 컴파일 대상이 아니다.

**Why:** 스타터킷 특성상 "모든 걸 켜두고 필요없는 걸 끄는" 방식이 아니라 "필요한 것만 가져가는" 방식으로 설계됨. 기술 스택 및 디렉토리 구조는 `package.json`과 파일시스템에서 직접 확인할 것.

**How to apply:** 코드 리뷰 시 `templates/` 파일들은 "실제 동작 코드"가 아닌 "참고용 템플릿"임을 감안하여 평가할 것. 해당 파일의 이슈는 심각도를 한 단계 낮춰 판단해도 무방.
