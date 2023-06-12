# redux
```
npm i redux
```


## data flow
<img src="./redux_dataFlow.gif" width="50%">

* UI 에서 Event 가 발생하고, Dispatch 를 통해 action / thunk 가 store 에 전달된다.
* Middleware 가 설정되있을 경우(thunk), dispatch 가 처리되기 전에 Middleware 를 처리한다. (위 사진에서는 서버와의 api 비동기 통신)
* dispatch 에 담긴 action 이 정의된 reducer 를 통해 state 가 조작된 후 새로운 state 를 반환한다.
* 새로이 반환된 state 를 통해 UI 를 re-rendering 한다.


## initialState
+ global 하게 사용할 state 의 초기값을 생성해준다.
+ reducer 가 분리될 경우 각각의 reducer 마다 initialState 를 지정해주어야 한다.
``` javascript
const initialState = {
  user: [],
  posts: [],
}
```

## 
