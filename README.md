# 원티드 프리온보딩 프론트엔드 - 선발 과제

https://github.com/walking-sunset/selection-task

## 사용 기술 스택 및 라이브러리

- Framework : React.js
- CSS-IN-JS : emotion
- REST API 요청 및 응답 : axios
- 아이콘 : react-icons
- 라우팅 및 리다이렉트 : react-router-dom

## 프로젝트 실행

프로젝트 파일 클론

```
git clone https://github.com/hlezg08/wanted-pre-onboarding-fe.git
```

프로젝트 실행에 필요한 라이브러리(node_modules) 설치

```
yarn install
```

프로젝트 실행

```
yarn start
```

`localhost:3000` 경로로 실행됩니다.

## 프로젝트 데모

### 회원가입 및 로그인

#### 회원가입

![signup-hyelin-150](https://user-images.githubusercontent.com/59791809/185732997-ada458c6-082a-4e2f-9abb-708f400431c5.gif)

#### 로그인

![login-hyelin-150](https://user-images.githubusercontent.com/59791809/185732982-cdf77314-7e5c-4fd2-8b6d-75339c677777.gif)

#### 리다이렉트

1. 토큰이 있을 때 `/`경로 접속시 `/todo`로 리다이렉트
   ![redirect-token](https://user-images.githubusercontent.com/59791809/185733029-80c5f84f-7e65-41cf-9c8b-aba23bc2b43e.gif)

2. 토큰이 없을 때 `/todo` 접속시 `/`로 리다이렉트
   ![redirect-no token](https://user-images.githubusercontent.com/59791809/185733025-70545dec-87d4-458f-9195-a715bea7f22d.gif)

### 투두리스트

#### 투두리스트 등록

![createTodo](https://user-images.githubusercontent.com/59791809/185733051-24090fb5-bd82-47fd-ae3b-7d5531a60e87.gif)

#### 투두리스트 수정

- 내용 수정
  ![updateTodo-contents](https://user-images.githubusercontent.com/59791809/185733058-510f4b9d-e132-402f-86d7-dc3d4200c60e.gif)
- 완료 표시
  ![updateTodo-complete](https://user-images.githubusercontent.com/59791809/185733057-cd396bad-5577-4a86-a468-0190bfdb3dbd.gif)

#### 투두리스트 삭제

![deleteTodo](https://user-images.githubusercontent.com/59791809/185733056-1e32cfa3-b249-484e-b1bf-14ee4074bac4.gif)
