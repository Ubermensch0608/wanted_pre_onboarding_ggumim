# 집 소개기능 - 사진과 가구 정보 조합

### 👍 배포 주소

<a href="https://nervous-mestorf-40df22.netlify.app/" target="_blank">React로 구현한 집꾸미기 일부 기능 배포 주소</a>


### 🎠 구현 기능

---

![구현기능](https://user-images.githubusercontent.com/93258739/151914762-2e61bc19-7796-4c7a-b270-a24acaf67bda.gif)

### ✨사용 기술

---

Front

- React
- module-css
- redux toolkit

### 🔱실행 순서

---

1.  설치

        npx create-react-app wanted_pre_onboarding_ggumim
        yarn install
        yarn add react-redux @reduxjs/toolkit

2.  실행
    yarn start

### 🗂 폴더 구조

---

    src
    ├─ assets/
    ├─ components/
    │          ├ RoomImage/
    ├ layout/  │
    │          └ Slide/
    ├ store/
    │
    ├ utils/
    │
    └ App.jsx, index.js

### 🎈 기능 설명

---

[x] 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시

[x] 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경

[x]닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경

[x] tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고, 있던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출

[x] 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력

[x] 선택된 가구는 선택되었으면 표시

[x] 할인율이 존재하는 경우에는 상단에 할인율(discountRate) 표시

### 👊 과제 해결 포인트

---

- 재사용 가능한 컴포넌트 중심으로 구현
        - 여러 번 쓰일 수 있는 컴포넌트는 재사용할 수 있는 컴포넌트로 만들어 쉬운 재사용과 유지보수의 용의성을 높였다.        

- 불필요한 props chanin 최소화
        - redux toolkit을 이용하여 전역적으로 state를 관리하였다.
        - 이로 인해 이후 기능을 개선 시 쉬운 코드 리딩과 비효율성의 방지, 보다 쉬운 유지보수가 기대된다.      
                     
- 불필요한 로직 및 깔끔한 코드 지향
        -  꾸준한 Refactoring으로 불필요한 코드 및 props 등 제거 및 교체
                     
- 기능 구현에 대한 고민
  - 문제점: **클릭한**버튼에 해당하는 tool tip만 나타나게 하는 것에 대한 어려움
  - 개선 과정
    - 각 tool tip의 세부 사항을 결정 짓는 것이 무엇인지 고민해봄
    - 결국 tool tip의 나타남을 결정 짓는 것은 class가 부여에 대한 여부임
    - state의 index값과 누르는 버튼의 index 값이 일치하지 않을 경우 hide class를 부여하도록 설정
    - 같은 버튼을 누를 경우에만 tool tip이 바뀌는 새로운 버그 발생
    - 현재 숨겨져 있는지 여부를 저장하는 state의 isHide값에 따른 class 부여 추가 적용
    - 오류 해결 및 클릭한 버튼에 따라 하나만 렌더링 되는 tool tip 구현 완료
