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
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
});
```
+ counterSlice 를 통해 얻은 counterReducer 를 store 에 등록한다.
+ 1개의 store 는 여러 개의 reducer 를 가질 수 있다.


---
## createSlice
+ counter 컴포넌트에 사용할 state, reducer, actions 를 생성한다.
+ 주요 키 값으로 name, initialState, reducers 를 설정한다.
  + name : action 의 구분이 되는 키
  + initialState : 초기 값으로 사용할 state
  + reducers: action 에 따라 실행할 reducers
``` javascript
import { counterSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

console.log(counterSlice.actions.increment());

const counterReducer = counterSlice.reducer;
export default counterReducer;
export const { increment, decrment, incrementByAmount } = counterSlice.actions;
```
> console
```
> { "type": "counter/increment" }
```
+ 원래는 state 를 변경할 때 불변성(Immutable)을 지켜주어야 하나
+ @redux/toolkit 에는 immer 라이브러리가 포함되어 있어 state가 프록시로 연결되며 복사본으로 교체된다.
+ 원래는 아래 처럼 작성해야되나... 가독성도 나쁘고 코드도 길어져서 immer 가 포함된 redux/toolkit 을 쓰자 !
> Immutable
``` javascript
// Immutable update logic by hand.
const handwrittenReducer = (state, action) => {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue
        }
      }
    }
  }
}
// Use immer
const reducerWithImmer = (state, action) => {
  state.first.second[action.someId].fourth = action.someValue
}
```

---
## Writing Async Logic with Thunks
+ 위에선 synchronous 한 코드만 처리하였다.
+ 그렇다면, asynchronous 한 코드는 어떻게 처리할 수 있을까?
+ @redux/toolkit은 createAsyncThunk 라는 asynchronous 전용 API 를 제공하지만, 먼저 직접 작성해보자.
> features/counter/counterSlice.js
``` javascript
// ... skip
export const incrementAsync = amount => dispatch => {
  setTimeout(()=>{
    dispatch(incrementByAmount(amount));
  }, 1000);
}
```
> app/store.js
``` javascript
// ... skip
console.log('before', store.getState());
store.dispatch(incrementAsync(5));
setTimeout(() => {
  console.log('after', store.getState()
}, 1000);
```
> console
```
> before {"counter": { "value": 0 }}
> after  {"counter": { "value": 5 }}
```
+ 만약 ajax 를 사용한다면..
> featuers/counter/counterslice.js
``` javascript
const fetchUserById = userId => {
  return async (dispatch, getState) => {
    try {
      const user = await axios.get('http://localhost:8081/post/user', {userId} );
      dispatch(userLoaded(user));
    } catch(error){
      // If something went wrong, handle it here
    }
  }
}
```


---
## selector
+ state 에서 원하는 state 를 뽑아내는데 사용하는 함수를 selector 라고 부른다.
+ UI 에서 useSelector hook 을 사용해서 state 를 가져올 수 있는데 다음과 같이 사용한다.
+ @redux/toolkit 은 memoized 된 selector 인 createSelector API를 제공하는데 추추헤 설명하도록 한다.
> features/counter/Counter.jsx
``` javascript
import { useSelector } from 'react-redux;

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>{count}</div>
  )
}
```
+ 이 때에 state => state.counter.value 가 selector 가 된다.
+ 위와 같이 익명 함수로 selector 때마다 작성할 수도 있지만
+ 보통 slice 파일에 selector 를 미리 지정해놓고 import 하여 사용한다.
> features/counter/counterSlice.js
``` javascript
// ...skip
export const selectValue = (state) => state.counter.value;
```
> features/counter/Counter.jsx
``` javascript
import { selectValue } from './counterSlice';

const Counter = () => {
  const count = useSelector(selectValue);
  return (
    <div>{count}</div>
  )
}

export default Counter;
```


---
## dispatch
+ dispatch 를 통해 사전에 정의된 reducer 를 action 을 통해 실행시킬 수 있다.
+ useDispatch hook 을 사용해서 action 을 reducer 에 전달할 수 있다.
> features/counter/Counter.jsx
``` javascript
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectValue,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector(selectValue);
  const dispatch = useDispatch();

  const increaseCount = () => {
    dispatch(increment());
  };
  const decreaseCount = () => {
    dispatch(decrement());
  };
  const increaseByAmount = (amount) => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <>
      <div>
        <span style={{ margin: "10px", fontSize: "2rem" }}>{count}</span>
        <button onClick={increaseCount}>➕</button>
        <button onClick={decreaseCount}>➖</button>
        <button
          onClick={() => {
            increaseByAmount(5);
          }}
        >
          ➕5
        </button>
      </div>
    </>
  );
};

export default Counter;
```
+ 버튼을 클릭하면 dispatch 가 실행된다.
+ action 이 필요한 reducer 의 경우 파라미터를 담아 보낸다.
> features/counter/counterSlice.js
``` javascript
// ...skip
const counterSlice = createSlice({
  // ...skip
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  }
});
```
+ action 에 맞는 함수가 동작된다.
+ dispatch 로 받은 파라미터는 action.payload 에 담긴다.


---
## Provider
+ store 을 만들었으면 이를 제공해줄 Component 상위에 Provider 를 설정해준다.
+ Provider 의 store 인수에 만든 store 을 담아준다.
> index.js
``` javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";

const start = () => {
  ReactDOM.render(
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>,
    document.querySelector("#root")
  );
};

start();
```


# redux turtorial
+ 얼추 @reduxjs/toolkit 을 알았으니, [redux tutorial]https://redux.js.org/tutorials/essentials/part-3-data-flow
