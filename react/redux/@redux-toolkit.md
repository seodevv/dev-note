# @redux-toolkit
+ Redux is a pattern and library for managing and updating application state, using events called "actions".
+ "action" 이라는 이벤트를 사용하여 어플리케이션의 상태를 관리하고 업데이트하기 위한 패턴 및 라이브러리이다.
+ redux 라이브러리도 있지만, redux 에 비해 코드가 짧고 API 가 통합되어 있어 redux 에서도 @redux/toolkit 사용을 권장한다.

<hr>
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


---
# redux turtorial
+ 얼추 @reduxjs/toolkit 을 알았으니, 본격적으로 [redux tutorial](https://redux.js.org/tutorials/essentials/part-3-data-flow) 진행해보면서 Simple sns 을 만들어보자.


---
## Application Content
```
└ /public
└ /src
  └ /app
    └ store.js
    └ Navbar.jsx
  └ /features
    └ /posts
    └ /users
  └ /components
    └ Spinner.jsx
  └ index.css
  └ index.jsx
  └ App.jsx
```
+ tutorial 에선 asynchronous logic 을 구현할 떄 사용하는
  + fakeAPI(./src/api/server.js, client.js) 가 존재하나,
  + 본인은 express server 로 구현하여 asynchronous logic 을 구현하였다.
+ 만약 server 가 없다면 redux 가 제공해주는
  + [open sandbox](https://codesandbox.io/s/github/reduxjs/redux-essentials-example-app/tree/master/?from-embed=&file=/src/components/Spinner.js:0-276) 을 이용하거나
  + package.json 을 가져와 local 에 구성하면 될 듯하다.


---
## createSlice
+ @reduxjs/toolkit 으로부터 createSlice 를 import 하여 postsSlice 를 생성한다.
> features/posts/postSlice.js
``` javascript
const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  { id: 1, title: "First Post!", content: "Hello!" },
  { id: 2, title: "Second Post!", content: "Hi!" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

const postsReducer = postsSlice.reducer;

export default postsReducer;
export const {} = postsSlice.actions;

export const selectAllPosts = (state) => state.posts;
```
+ 초기 값과 게시물(posts)를 조회하는 simple selector 또한 작성해주었다.
+ reducers 는 추후 action 이 필요할 때 작성할 예정이다.


---
## configureStore
+ @reduxjs/toolkit 으로부터 configureStore 를 import 하여 store 를 생성한다.
> app/store.js
``` javascript
const { configureStore } = require("@reduxjs/toolkit");
const { default: postsReducer } = require("../featrues/posts/postsSlice");

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
```
+ 이전에 만든 postsSlice 로부터 reducer 를 가져와 posts state 에 설정해주었다.


---
## Provider
+ react-redux 로부터 Provider 를 import 하여 만든 store를 컴포넌트가 사용할 수 있도록 설정한다.
> index.jsx
``` javascript
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter } from "react-router-dom";

const start = () => {
  ReactDOM.render(
    <>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </>,
    document.querySelector("#root")
  );
};
start();
```
+ 좀 더 간편한 path 관리를 위해 react-router-dom 도 사용했다.


---
## useSelector
+ useSelector hook 와 미리 정의해둔 selector 를 사용해 posts state 를 불러온다.
> features/posts/PostsList.jsx
``` javascript
import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id} className="post-excerpt">
      <h3>{post.title}</h3>
      <p className="post-content">{post.content}</p>
    </article>
  ));

  return (
    <>
      <section className="posts-list">
        <h2>Posts</h2>
        {renderedPosts}
      </section>
    </>
  );
};

export default PostsList;
``` 
+ 이를 통해 postsList 컴포넌트를 작성해주었다.


> App.jsx
+ 앞서 만든 PostsList 컴포넌트를 route 에 등록한다.
``` javascript
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./app/Navbar";
import PostsList from "./featrues/posts/postsList";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<PostsList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
```
+ react-ruter-dom 을 통해 / 경로 접속 시 PostsList 컴포넌트가 보이도록 설정한다.


---
## reducer
+ post 를 추가하는 AddPostForm 컴포넌트를 작성하기 전에 필요한 addPost reducer 를 작성한다.

> features/posts/postsSlice.js
``` javascript
// ... skip
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        const id = Math.max(...state.map((post) => post.id)) + 1;
        state.push({ id, ...action.payload });
      },
      prepare: (title, content) => ({
        payload: {
          title,
          content,
        },
      }),
    },
  },
});

export const { addPost } = postSlice.actions;
```
+ reducer, prepare 를 사용하여 action 을 정의해주었다.
+ 만든 addPost action 을 export 해준다.


---
## dispatch
+ dispatch 를 사용하여 AddPostForm 으로부터 받은 input 을 state.posts 에 추가한다.
> features/posts/AddPostForm.jsx
``` javascript
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const canSave = title.trim() && content.trim();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onClickAddPost = (e) => {
    if (canSave) {
      dispatch(addPost(title, content));
      setTitle('');
      setContent('');
    }
  };

  return (
    <>
      <section>
        <h2>Add a New Post</h2>
        <form className="post-add-form">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
          <button type="button" onClick={onClickAddPost}>
            Save Post
          </button>t
        </form>
      </section>
    </>
  );
};

export default AddPostForm;
```
+ input, textarea 으로 받은 데이터는 local state 에 저장하고,
+ button 이 클릭됬을 때 dispatch 를 사용하여 global state 에 post 를 저장해주었다.


---
## Selector
+ Selector 를 사용하여 post 의 상세페이지(SinglePostPage)를 구현한다.
> features/posts/postsSlice.js
``` javascript
// ... skip
export const selectPostById = (state, postId) => state.posts.find(post => post.id === Number(postId));
```
+ state 와 postId 를 파라미터로 받아 post 를 찾는 selectPostById 라는 selector 를 생성해주고

> features/posts/SinglePostPage.jsx
``` javascript
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectPostById } from "./postsSlice";

const SinglePostPage = () => {
  const navigator = useNavigate();
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));

  const onClickBack = () => {
    navigator(-1);
  };

  let content;
  if (!post) {
    content = <h2>Post not found !</h2>;
  } else {
    content = (
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={onClickBack}
        >
          Back
        </button>
      </article>
    );
  }
  return (
    <>
      <section>{content}</section>
    </>
  );
};

export default SinglePostPage;
```
+ useSelector hook 와 방금 만든 selector 를 사용해 post 를 찾는다.
  + postId 는 url match 로 데이터를 받는다.
+ post 가 없을 경우에 대한 예외 처리와 postsList 로 돌아갈 수 있는 버튼을 만들었다.

> features/posts/PostsList.jsx
``` javascript
// ... skip
import { useNavigate } from 'react-router-dom';

const navigator = useNavigate();
const onClickViewPost = (postId) => {
  navigator(`/post/${postId}`);
}

const renderedPosts = posts.map((post) => (
  <article
    key={post.id}
    className="post-excerpt"
    onClick={() => onClickViewPost(post.id)}
  >
    // ... skip
  </article>
));
```
+ view 가 구성됬으니 PostsList 에 event 를 추가한다.
+ useNavigate hook 을 사용해서 게시물이 클릭되면 /post/:postId 의 url 로 이동하도록 설정하였다.


> App.jsx
``` javascript
// ...skip
<Routes>
  // ...skip
  <Route path="/post/:postId" element={<SinglePostPage />} />
</Routes>
// ...skil
```
+ 새로운 url 을 생겼으니 App 컴포넌트에서 새로운 route 를 설정해준다.
