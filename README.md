# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Typescript CLA
```
npm install -g typescript
```
```
npx create-react-app my-app --template typescript
```
## tsc 명령어 에러 날때

1. Visual Studio Code 관리자 권한으로 실행

2. terminal에 아래 순서대로 입력
```
$ Get-ExecutionPolicy
```
```
$ Set-ExecutionPolicy RemoteSigned
```
※ Restricted에서 RemoteSigned로 변경

Restricted : (제한된) 기본 실행 정책, 명령어 하나씩 실행 가능, 스크립트 파일을 로드하여 실행할 수 없음

RemoteSigned : 로컬 컴퓨터에서 본인이 생성한 스크립트만 실행 가능, 인터넷에서 다운로드한 스크립트는 신뢰된 배포자에 의해 서명된 것만 실행할 수 있음