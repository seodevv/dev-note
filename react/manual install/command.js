// 신규 react 프로젝트 생성
mkdir manual-react
cd manual-react

// package.json 파일 생성
npm init

// react 모듈 설치
npm i react react-dom

// babel 모듈 및 로더 설치
// babel 은 브라우저 간의 호환성을 해결해주는 패키지로 webpack 과 같이 쓰인다.
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader

// webpack 모듈 설치
// webpack 은 여러 js, jsx 파일 등을 하나의 js 파일로 합쳐주는 패키지이다.
// react-refresh 는 webpack 핫리로딩 해주는 패키지이다.
npm i -D webpack webpack-cli
npm i -D react-refresh @pmmmwh/react-refresh-webpack-plugin  
