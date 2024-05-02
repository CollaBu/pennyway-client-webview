## 💰 Pennyway

> 지출 관리 SNS 플랫폼

| Version # | Revision Date | Description             | Author |
| :-------: | :-----------: | :---------------------- | :----: |
|  v0.0.1   |  2024.03.11   | 프로젝트 기본 설명 작성 | 이의찬 |

<br/>

## 👪 Webview Team

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

- main 브랜치 (default)

  - 배포 가능한 상태의 코드만을 관리하는 프로덕션용 브랜치
  - PM(양재서)의 승인 후 병합 가능
    - 기능 추가와 관련된 PR에 대해 **반드시 리뷰어** 등록
    - **MVP release 이후에는 모든 PR**에 대해 리뷰어 등록

- 작업 브랜치

  - 티켓이 포함된 작업은 `{티켓번호}-{브랜치명}`로 브랜치 명을 작성한다.
    - `feat/{티켓번호}-{브랜치명}`: 신규 기능 개발 시 브랜치명
    - `fix/{티켓번호}-{브랜치명}`: 수정 작업 시 브랜치명
    - `refactor/{티켓번호}-{브랜치명}`: 리팩토링 작업 시 브랜치명
    - `hotfix/{티켓번호}-{브랜치명}`: 빠르게 수정해야 하는 버그 조치 시 브랜치명
  - 티켓이 포함되지 않은 작업은 명확한 `브랜치명`을 작성한다.
    - `fix/{브랜치명}`
    - `hotfix/{브랜치명}`

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

### 1️⃣ FSD Architecture

> 💡 FSD Architecture를 커스텀하여 사용합니다.

- features, entities 2단계를 통합해 features단계로 설정하였습니다.
<div align="center">
  <img src="https://github.com/CollaBu/pennyway-client-webview/assets/44726494/5ee680f1-77a6-494b-b0e9-24fe20ed55a9" width="600">
</div>
<br/>

### 2️⃣ CI/CD Pipeline

<div align="center">
    <img src="https://github.com/CollaBu/pennyway-client-webview/assets/44726494/e236ae0b-66d1-48a3-ade7-4801fedd1285" alt="ci pipeline" width="600" />
    <img src="https://github.com/CollaBu/pennyway-client-webview/assets/44726494/37d03add-2956-466e-a100-549168860cad" alt="cd pipeline" width="600" />
</div>

## 📗 Tech Stack

### 1️⃣ Language

- TypeScript v5.3.3

### 2️⃣ Framework & Library

- Node v18.18.0
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
- Vitest v1.4.0

### 7️⃣ Mocking Library

- MSW v2.2.13

### 8️⃣ Collaboration & Project Management Tools

- GitHub
- Jira
- Confluence
- Discord
