# redux
```
npm i redux
```


## data flow
<p align="center"><img src="./redux_dataFlow.gif" width="50%"/></p>


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
