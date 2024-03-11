## 💰 Pennyway
> 지출 관리 SNS 플랫폼

| Version # | Revision Date | Description   | Author |
|:---------:|:-------------:|:--------------|:------:|
|  v0.0.1   |  2024.03.11   | 프로젝트 기본 설명 작성 | 이의찬 |

<br/>

## 👪 iOS Team

<table>
    <tr>
        <td align="center">
            <a href="https://github.com/Legitgoons">이의찬</a>
        </td>
        <td align="center">
            <a href="https://github.com/BangDori">강병준</a>
        </td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://github.com/Legitgoons"><img height="200px" width="200px" src="https://avatars.githubusercontent.com/u/101088491?v=4"/></a>
        </td>
        <td align="center">
            <a href="https://github.com/BangDori"><img height="200px" width="200px" src="https://avatars.githubusercontent.com/u/44726494?v=4"/></a>
        </td>
    </tr>
</table>


<br/>

## 🌳 Branch Convention
> 💡 Github-Flow 전략을 사용합니다.
- main
    - 배포 가능한 상태의 코드만을 관리하는 프로덕션용 브랜치
    - PM(양재서)의 승인 후 병합 가능
- develop
    - 개발 전용 브랜치
    - 한 명 이상의 팀원의 승인 후 병합 가능
    - 기능 개발이 완료된 브랜치를 병합하여 테스트를 진행
- 이슈 기반 브랜치
    - 이슈는 `{티켓번호}-{브랜치명}`을 포함한다.
    - `feat/{티켓번호}-{브랜치명}`: 신규 기능 개발 시 브랜치명
    - `fix/{티켓번호}-{브랜치명}`: 리팩토링, 수정 작업 시 브랜치명
    - `hotfix/{티켓번호}-{브랜치명}`: 빠르게 수정해야 하는 버그 조치 시 브랜치명
- 릴리즈 브랜치
    - 배포를 위한 최종적인 버그 수정 등의 개발을 수행하는 브랜치

<br/>

## 🤝 Commit Convention
> 💡 angular commit convention
  - feat: 신규 기능 추가
  - fix: 버그 수정
  - docs: 문서 수정
  - style: 코드 포맷팅, 세미콜론 누락 (코드 변경 없는 경우)
  - refactor: 코드 리팩토링
  - test: 테스트 코드, 리펙토링 테스트 코드 추가
  - chore: 빌드 업무 수정, 패키지 매니저 수정

## 📌 Architecture
### FSD Architecture
- FSD Architecture를 커스텀하여 사용합니다.
- widgets, features, entities 3단계를 통합해 components단계로 설정하였습니다.
<div align="center">
  <img src="https://github.com/Legitgoons/Legitgoons/assets/101088491/99d1490e-7066-41cf-8f8a-70326627ea1f" width="600">
</div>
<br/>

## 📗 Tech Stack

### 1️⃣ Language 
- TypeScript v5.3.3
### 2️⃣ Framework & Library
- React v18.2.0
- React Query v5.25.0
- Axios v1.6.7
### 3️⃣ Style Sheet
- Sass v1.71.1
### 4️⃣ Code Formatting & Linting Tools
- Prettier v3.2.5
- ESLint v8.57.0
### 5️⃣ Build & Deployment Tools
- Vite v5.1.5
- Amazon EC2
### 6️⃣ Automation & Test Framework
- GitHub Actions
- Jest v29.7.0
### 7️⃣ Collaboration & Project Management Tools
- GitHub
- Jira
- Confluence
- Discord