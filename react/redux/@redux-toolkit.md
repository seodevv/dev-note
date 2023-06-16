# @redux-toolkit
+ Redux is a pattern and library for managing and updating application state, using events called "actions".
+ "action" 이라는 이벤트를 사용하여 어플리케이션의 상태를 관리하고 업데이트하기 위한 패턴 및 라이브러리이다.
+ redux 라이브러리도 있지만, redux 에 비해 코드가 짧고 API 가 통합되어 있어 redux 에서도 @redux/toolkit 사용을 권장한다.


---
# Install
```
npm i @redux/toolkit
npm i react-redux
```
> If CRA
```
npx create-react-app redux-essentials-example --template redux
```


---
# Application Contents
```
└ src
  └ index.jsx
  └ App.jsx
  └ /app
    └ store.js
  └ /features
    └ /counter
      └ Counter.jsx
      └ counterSlice.js
```


---
# Creating The Redux Store
## configureStore
+ global state 로 사용할 store 를 생성한다.
> app/store.js
``` javascript
const store = configureStore({
  reducer: {
    counter: counterReducer,
});
```
+ counterSlice 를 통해 얻은 counterReducer 를 store 에 등록한다.
+ 1개의 store 는 여러 개의 reducer 를 가질 수 있다.




