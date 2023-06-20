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
> features/counter/counterSlice.js
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
    return response.data; // ajax 로 받은 data 를 return 해준다. 추후 extraReducers 에서 state 관리에 사용한다.
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
const counterReducer = counterSlice.reducer;
export default counterReducer;

export const selectCounterValue = (state) => state.counter.value;
export const selectCounterStatus = (state) => state.counter.status;
```

> features/counter/Counter.jsx
``` javascript
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  COUNTER_INCREASE,
  COUNTER_DECREASE,
  fetchCounterValue,
  fetchCounterUpdated,
  selectCounterValue,
  selectCounterStatus,
} from "./counterSlice";
import Spinner from "../../components/Spinner";

const ButtonGroup = ({ type, dispatch }) => { // 부모 컴포넌트로부터 type, dispatch 를 받는다.
  const [amount, setAmount] = useState(5); // input value 를 관리할 state 이다.

  // 클릭된 button 에 따라 amount, type 을 결정하고 이를 토대로 dispatch 한다.
  const updateCounterValue = (amount, type) => {
    dispatch(fetchCounterUpdated({ amount, type }));
  };

  return (
    <div className="counter-button-group">
      <button onClick={() => updateCounterValue(1, type)}>
        {type === COUNTER_INCREASE ? "+1" : "-1"}
      </button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <button onClick={() => updateCounterValue(amount, type)}>
        {type === COUNTER_INCREASE ? "+" : "-"}
      </button>
    </div>
  );
};

const Counter = () => {
  const count = useSelector(selectCounterValue); // counter value 를 가져온다.
  const status = useSelector(selectCounterStatus); // counter status 를 가져온다.
  const dispatch = useDispatch(); 

  let content;
  if (status === "pending") { // counter status 가 pending 이면 Loading 를 표현한다.
    content = <Spinner text="Loading" />;
  } else if (status === "failed") { // counter status 가 failed 이면 error 를 표현한다.
    content = <h2>Sorry, Network Error</h2>;
  } else { // counter status 가 idle 이면 counter 를 표현한다.
    content = (
      <>
        <div className="counter-value">{count}</div>
        <ButtonGroup type={COUNTER_INCREASE} dispatch={dispatch} />
        <ButtonGroup type={COUNTER_DECREASE} dispatch={dispatch} />
      </>
    );
  }

  useEffect(() => {
    dispatch(fetchCounterValue());
  }, []); // 컴포넌트가 실행되는 최초에 server 로부터 value 를 가져와 state 를 load 한다.

  return (
    <>
      <div className="container">{content}</div>
    </>
  );
};

export default Counter;
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
  );
}
export default Counter;
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
## Normalizing Data (createEntityAdpter)
+ 데이터를 정규화하는 것은 중요하다. 왜냐하면...
1. 데이터 정규화 시 데이터 중복이 없어져 중복으로 인한 낭비, 부작용을 예방할 수 있다.
2. 데이터 정규화 시 데이터 검색, 데이터 정렬 성능 등 간의 이점을 가져올 수 있다.
+ @reduxjs/toolkit 에서는 데이터를 정규화할 수 있는 API 를 제공하는데, 바로 createEntityAdapter 이다.
+ 데이터를 정규화하기 위해선 배열 데이터가 필요하기 떄문에 간단한 postsSlice 를 작성해보자
> features/posts/postsSlice.js
``` javascript
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// createEntityAdapter API 를 사용하여 postsAdapter 를 선언한다.
// 파라미터로는 ids 를 어떻게 정렬할 것인지 결정하는 sortComparer 을 제공한다.
const postsAdapter = createEntityAdapter({
  sortComparer: (a,b) => b.date.localeCompare(a.date);
});
// createEntityAdapter 는 getInitialState 함수도 제공하는데,
// 이를 사용하면 자동으로 initiaiState 에 ids: [], entities: [] 가 포함된다. (추가적인 state 는 본인이 작성하면 된다.)
const initialState = postsAdapter.getInitialState({
  status: 'idle',
});

// createAsyncThunk 를 통해 server 로부터 data 를 가져온다.
export const fetchPostsLoaded = createAsyncThunk('posts/fetchPostsLoaded', async () => {
  const response = await axios.get(process.env.SERVER_URL + '/get/posts');
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
      .addCase(fetchPostsLoaded.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchPostsLoaded.fulfilled, (state, action) => {
        state.status = "idle";
        // postsAdapter 를 사용해 state 를 설정할 수 있다.
        // postsAdpater.setAll 은 모든 ids 와 entities 를 대체한다.
        postsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchPostsLoaded.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

const postsReducer = postsSlice.reducer;
export default postsReducer;
// createEntityAdapter 는 간단한 selector 도 제공을 해주는데, getSelectors 를 통해 destructure 가 가능하다.
// selectAll: 모든 entities 를 배열 형태로 가져온다.
// selectById: 특정 id 의 entities 데이터를 가져온다.
// selectIds: 모든 Ids 를 배열 형태로 가져온다.
export const {
  selectAll: selectPostsAll,
  selectById: selectPostById,
  selectIds: selectPostsIds,
} = postsAdapter.getSelectors((state) => state.posts);
export const selectPostsStatus = (state) => state.posts.status;
```
+ createEntityAdapter 의 CRUD Functions
1. addOne: 단일 entity 를 수락하고 entity가 없는 경우 추가한다.
2. addMany: Record<EntityId, T> 모양의 개체 또는 개체 배열을 수락하고 없는 경우 추가한다.
3. setOne: 단일 entity 를 수락하고 추가하거나 교체한다.
4. setMany: Record<EntityId, T> 모양의 개체 또는 개체 배열을 수락하고 추가하거나 교체한다.
5. setAll: Record<EntityId, T> 모양의 개체 또는 개체 배열을 수락하고 모든 기존 개체를 대체한다.
6. removeOne: 단일 entityId 를 수락하고 해당 entityId 가 있을 경우 제거한다.
7. removeMany: entityIds 배열을 수락하고 해당 entityId 가 있을 경우 제거한다.
8. removeAll: 모든 entity 를 제거한다.
9. updateOne: 단일 entityId 와 변경 필드를 포함한 개체를 수락하고 해당 entity 에서 얕은 업데이트를 수행한다.
10. updateMany: 업데이트 개체의 배열을 수락하고 모든 해당 entity 에 대해 얕은 업데이트를 수행한다.
11. upsertOne: 단일 entity 를 수락하고 해당 entityId 가 있을 경우 얕은 업데이트를 수행하고 기존 entity 와 일치하는 필드는 기존 값을 덮어쓴다. entity 가 없으면 추가된다.
12. upsertMany: 얕게 upsert 될 Record<EntityId, T> 모양의 개체 또는 개체 배열을 허용한다.

> app/store.js
``` javascript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReudcer from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReudcer, // Slice 가 추가되었으니 store 에 추가해준다.
  },
});

export default store;
```

> features/posts/PostsList.jsx
``` javascript
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDistanceToNow, parseISO } from "date-fns";
import {
  fetchPostsLoaded,
  selectPostById,
  selectPostsIds,
  selectPostsStatus,
} from "./postsSlice";
import Spinner from "../../components/Spinner";

const Post = ({ postId }) => { // 부모 컴포넌트로부터 postId 를 props 로 받는다.
  // 사전에 정의된 selector 를 통해 post 정보를 가져온다.
  const post = useSelector((state) => selectPostById(state, postId));
  // date-fns 의 formatDistnaceToNow 를 사용하기 위해 date 를 ISO type 으로 변경한다.
  const date = parseISO(post.date);
  return (
    <section className="post-excerpt">
      <h3>{post.title}</h3>
      <span>{formatDistanceToNow(date)} ago</span>
      <p>{post.content}</p>
    </section>
  );
};

const PostsList = () => {
  // 사전에 정의된 selector 를 통해 postsIds 배열을 가져온다.
  const postsIds = useSelector(selectPostsIds);
  // posts 정보는 서버로부터 가져오기 때문에 데이터 상태 값을 가져온다.
  const status = useSelector(selectPostsStatus);
  const dispatch = useDispatch();

  let content;
  if (status === "pending") { // posts 정보를 가져오는 중이면 로딩 화면
    content = <Spinner text="loading" />;
  } else if (status === "failed") { // posts 정보를 가져오는게 실패했으면 에러 화면
    content = <h2>Sorry, Network Error</h2>;
  } else { // posts 정보를 정상적으로 가져왔으면 posts list 를 표현
    content = (
      <article className="post">
        <h2>Posts</h2>
        {postsIds.map((postId) => (
          <Post key={postId} postId={postId} />
        ))}
      </article>
    );
  }

  // status 가 idle 상태면 server 로부터 posts 정보를 가져와 dispatch 한다.
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPostsLoaded());
    }
  }, []);
  return (
    <>
      <section className="container">{content}</section>
    </>
  );
};

export default PostsList;
```

> App.jsx
``` javascript
import React from "react";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";

const App = () => {
  return (
    <>
      <Counter />
      <PostsList />
    </>
  );
};

export default App;
```


---
## createSelector
+ @reduxjs/toolkit 에선 memoized 된 selector 를 지원하는데 바로 createSelector 이다.
+ createSelector 는 여러 파라미터를 가지는데, n-1 번쨰 까지가 input selector 가 되고 n 번쨰 파라미터가 output selector 가 된다.
+ input selector 의 값이 변하지 않는 이상 rerendering 되지 않는다.
> features/posts/postsSlice.js
``` javascript
export const searchPostsIds = createSelector(
  (state) => state.posts.entities, // 1 번쨰 input selector 로 entities 를 반환한다.
  (state, search) => search, // 2 번째 input selector 로 search 값을 반환한다.
  (entities, search) => { // 마지막 output selector 로 1, 2 번째 input selector 로부터 return 된 값을 순서대로 받는다. 
    if (search) { // search 값이 있을 경우
      return Object.values(entities) // title 에서 search 가 포함된 post 의 id 만 반환한다.
        .filter((post) => post.title.toLowerCase().includes(search))
        .map((post) => post.id);
    } else {
      return Object.values(entities).map((post) => post.id); // search 값이 없을 경우 전체 posts 의 ids 를 반환한다.
    }
  }
);
```


---
## createApi
+ createAsyncThunk 로 ajax 와 ajax 요청 상태에 따른 처리를 해보았는데, 다소 중복된 코드가 많다는 것을 느꼈을 것이다.
+ 이에 @reduxjs/toolkit 에서는 createApi API 를 제공해준다.
> features/posts/postsSlice.js
``` javascript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit'; 

// createApi 를 import 하여 apiSlice 를 선언한다.
export const apiSlice = createApi({
  // reducer path 가 되는 부분이다. (posts/fetchPostsLoaded 의 posts 부분)
  reducerPath: 'api', 
  // fetch 를 요청할 base url 이다. 
  // fetchBaseQuery 를 사용해 fetch 요청 시 동일한 header 등의 정보로 요청할 수 있다.
  baseQuery: fetchBaseQuery({baseUrl: process.env.SERVER_URL}), 
  // endPoints 는 서버와 상호 작용하기 위한 일련의 작업 정의이다.
  // GET 요청은 builder.query() 로, POST 등의 요청은 builder.mutation() 을 사용한다.
  endPoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/get/posts",
    }),
    getPost: builder.query({
      query: (postId) => `/get/post/${postId}`,
    }),
});
// endPoints 에서 만든 작업은 apiSlice 가 자동으로 hook 을 만들어준다.
// 만들어진 훅은 보통 use + 작업명 + Query 로 apiSlice 가 만들어준다.
// 이 hook 을 통해 fetch 요청 및 요청 상태 등의 정보를 가져올 수 있다.
export const { useGetPostsQuery, useGetPostQuery } = apiSlice;
```

> features/posts/PostsList.jsx
``` javascript
import React, { useMemo, useRef, useState } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useGetPostsQuery } from "./postsSlice";
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => { // 부모 컴포넌트로부터 post 를 받는다.
  const date = parseISO(post.date);

  const navigator = useNavigate();
  const onClickViewPost = () => { // 버튼 클릭시 post detail page 로 routing 한다.
    navigator(`/post/detail/${post.id}`);
  };
  return (
    <article className="post-excerpt">
      <h3>{post.title}</h3>
      <span>{formatDistanceToNow(date)} ago</span>
      <p>{post.content}</p>
      <button className="view-post btn btn-primary" onClick={onClickViewPost}>
        view Post
      </button>
    </article>
  );
};

const PostsList = () => {
  const [search, setSearch] = useState(""); // 검색 창의 input 을 저장하는 state
  const searchRef = useRef(null);
  const onKeyDownSearch = (e) => { // 검색 창에 enter 가 입력 되면 state 를 저장한다.
    if (e.code === "Enter") {
      setSearch(e.target.value);
      searchRef.current.value = "";
    }
  };

  // apiSlice 로부터 data 및 요청 상태 값을 가져온다.
  const {
    data: posts = [], // posts 를 가져오는 동안 posts 를 빈 배열로 초기화 해주었다.
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  // 검색 창 구현과 최신 post 가 위로 오도록 posts 를 정렬하였다.
  // sort, filter 특성 상 새로운 객체를 반환하기 때문에 
  // useMemo 를 사용하여 posts, search 값이 변경될 때만 rendering 되도록 설정하였다.
  const sortedFilteredPosts = useMemo(() => {
    let sortedFilteredPosts = posts.slice();
    sortedFilteredPosts.sort((a, b) => b.date.localeCompare(a.date));
    if (search) {
      sortedFilteredPosts = sortedFilteredPosts.filter((post) =>
        post.title.toLowerCase().includes(search)
      );
    }
    return sortedFilteredPosts;
  }, [posts, search]);

  let content;
  if (isLoading) { // 요청 상태일 때는 로딩 화면
    content = <Spinner text="loading" />;
  } else if (isError) { // 에러 상태일 때는 에러 화면
    content = <h2>{error.toString()}</h2>;
  } else if (isSuccess) { // 성공 상태일 때는 post list 를 표현한다.
    content = (
      <article className="post">
        <h2>Posts</h2>
        <div className="post-search">
          <h4>Search</h4>
          <input ref={searchRef} onKeyDown={onKeyDownSearch}></input>
          {sortedFilteredPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </article>
    );
  }
  return (
    <>
      <section className="container">{content}</section>
    </>
  );
};

export default PostsList;
```

> features/posts/PostDetail.jsx
``` javascript
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPostQuery } from "./postsSlice";
import Spinner from "../../components/Spinner";
import { formatDistanceToNow, parseISO } from "date-fns";

const PostDetail = () => {
  const { postId } = useParams(); // postId 를 router 를 통해 가져온다.
  // useGetPostQuery hook 을 사용하여 post 와 fetch 여부, success 여부를 가져온다.
  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId);

  // 각 button 에 따른 routing
  const navigator = useNavigate();
  const onClickBack = () => {
    navigator("/");
  };
  const onClickEdit = () => {
    navigator(`/post/edit/${postId}`);
  };

  let content;
  if (isFetching) { // fetch 가 진행 중일 때, 로딩 화면
    content = <Spinner text="Loading" />;
  } else if (isSuccess) { // fetch 가 성공 중일 때, post 표현
    const date = parseISO(post.date);
    content = (
      <article>
        <h3>{post.title}</h3>
        <span>{formatDistanceToNow(date)} ago</span>
        <p>{post.content}</p>
        <div className="excerpt-button-group">
          <button onClick={onClickBack}>Back</button>
          <button onClick={onClickEdit}>Edit</button>
        </div>
      </article>
    );
  }
  return (
    <>
      <section className="container">{content}</section>
    </>
  );
};

export default PostDetail;
```
+ apiSlice 로 인해 생성된 hook 는 다음을 포함한다.
1. data : 서버에서 실제로 받은 내용. 응답이 오기 전까지 정의되지 않는다.
2. isLoading : 이 Hook 가 첫 번째 요청을 하고 있는지를 나타내는 Boolean 값이다.
3. isFetching : 이 Hook 가 현재 서버에 요청하고 있는지 여부를 나타내는 Boolean 값이다.
4. isSuccess : 이 Hook 가 성공적인 요청을 했고, 캐시된 데이터를 사용할 수 있는지에 대한 Boolean 값이다.
5. isError : 마지막 요청에 오류가 있는지 나타내는 Boolean 값이다.
6. error : 에러 객체의 내용을 담고 있다.

> App.jsx
``` javascript
import React from "react";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./features/posts/PostDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<> <Counter /> <PostsList /> </>}/>
        <Route path="/post/detail/:postId" element={<> <PostDetail /> </>}/>
      </Routes>
    </>
  );
};

export default App;
```
+ App.jsx 에 routing 을 추가해준다.
