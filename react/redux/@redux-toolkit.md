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
> features/couter/couterSlice.js
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
export const incrementAsync = amount => dispatch => {
  setTimeout(()=>{
    dispatch(incrementByAmount(amount));
  }, 1000);
}
```
> app/store.js
``` javascript
console.log('before', store.getState());
store.dispatch(incrementAsync(5));
setTimeout(() => { // incrementAsync 함수가 1초 후에 실행되기 떄문에 getState 도 1초 후에 실행해주었다.
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
const fetchCounterLoaded = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(process.env.SERVER_URL + '/get/counter');
      dispatch(counterLoaded(response.data));
    } catch(error){
      // If something went wrong, handle it here
    }
  }
}
```
+ 위와 같이 ajax 를 사용하여 async logic 을 처리할 수 있다.


---
## createAsyncThunk
+ @reduxjs/toolkit 에선 위에 작성한 asynchornous 한 logic 을 createAsyncThunk API 형태로 제공해준다.
+ createAsyncThunk API 사용하여 thunk 를 생성해준 후,
+ 해당 함수의 pending, fulfilled, rejected 상황을 고려하여 extraReducers 를 작성해주면 된다.
``` javascript
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// counter 를 업데이트할 때 사용할 type 을 상수로 지정해주었다.
// 상수로 지정해준 이유는 increase, decrease 를 수기로 입력하다보면 오타가 날 수 있기 때문...(찾기 힘듬)
export const COUNTER_INCREASE = "increase";
export const COUNTER_DECREASE = "decrease";

const initialState = {
  value: null, // server 에서 value 값을 가져올 것이기 때문에 null 로 초기화 해준다.
  status: 'idle', // asynchronous logic 특성 상 응답 시간이 있기 때문에 상태에 따른 UI 를 구현한다.
}

export const fetchCounterValue = createAsyncThunk(
  'counter/fetchCounterValue', // action 의 명칭이 되는 파라미터이다.
  async () => { // async logic 이 실행되는 함수이다.
    const response = await axios.get(process.env.SERVER_URL + '/get/counter');
    return response.data; // async logic 으로 받은 data 를 return 해준다. 추후 extraReducers 에서 state 관리에 사용한다.
  }
);

// counter 를 업데이트 해주는 Thunk 도 만들어주었다.
export const fetchCounterUpdated = createAsyncThunk(
  "counter/fetchCounterUpdated",
  // createAsyncThunk 는 하나의 파라미터만 받을 수 있기 때문에 파라미터가 여러 개일 경우 객체로 전달하여 받는다.
  async ({ amount, type }) => { 
    // 전달된 type 에 따라 increase/decrease url 을 결정
    const requestUrl = `${process.env.SERVER_URL}/post/counter/${type}`;
    const response = await axios.post(requestUrl, { amount }); // ajax 요청
    return { ...response.data, amount, type }; // extraReducer 에 action.payload 로 넘긴다.
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchCounterValue async 함수가 pending(진행 중) 상태 일 때의 처리
      .addCase(fetchCounterValue.pending, (state, action) => { 
        state.status = 'pending'; // status 를 pending 으로 변경하고 UI 에서 loading 을 표현할 예정이다.
      })
      // fetchCounterValue async 함수가 fulfilled(성공) 상태 일 때의 처리
      .addCase(fetchCounterValue.fulfilled, (state, action) => {
        state.status = 'idle'; // status 를 idle 로 변경하고 UI 는 counter value 를 표현할 예정이다.
        state.value = action.payload.value; // createAsyncThunk 에서 return 된 값이 action.payload 에 담긴다.
      })
      // fetchCounterValue async 함수가 rejexted(실패) 상태 일 때의 처리
      .addCase(fetchCounterValue.rejected, (state, action) => {
        state.status = 'failed'; // status 를 failed 로 변경하고 UI 는 error 를 표현할 예정이다.
      })
      // fetchCounterUpdated async 함수는 fulfilled(성공) 상태만 작성해주었다.
      .addCase(fetchCounterUpdated.fulfilled, (state, action) => {
        // type 에 따라 state 를 increase/decrease 한다.
        if(action.payload.type === COUNTER_INCREASE){
          state.value += action.payload.amount;
          return;
        }
        state.value -= action.payload.amount;
      })
  },
});
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


---
## 
