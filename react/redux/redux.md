# redux
* state 를 global 하게 관리하기 위하여 나온 JS Library 이다.
* react 를 사용하다보면 state 를 props 로 여러 하위 컴포넌트를 거쳐 설정해주어야 하는 상황이 생기는데
* 다양한 성능 저하를 발생시키게 된다. (특히 렌더링 부분에서)
* 이를 global 하게 state 를 제공하여 각각 컴포넌트에 state 를 제공해주는 것이 바로 redux 이다.
```
npm i redux
```
* 보통 react 와 함께 쓰이긴 하나 여기에선 studey 의 목적으로 단일 redux 만을 소개한다.
> package.json
```
{
  "name": "redux",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack serve --env development"
  },
  "author": "seodev",
  "license": "ISC",
  "dependencies": {
    "redux": "^4.2.1"
  }
}
```


## data flow
<img src="./redux_dataFlow.gif" width="50%">

1. UI 에서 Event 가 발생하고, Dispatch 를 통해 action / thunk 가 store 에 전달된다.
2. Middleware 가 설정되있을 경우(thunk), dispatch 가 처리되기 전에 Middleware 를 처리한다. (위 사진에서는 서버와의 api 비동기 통신)
3. dispatch 에 담긴 action 이 정의된 reducer 를 통해 state 가 조작된 후 새로운 state 를 반환한다.
4. 새로이 반환된 state 를 통해 UI 를 re-rendering 한다.


## initialState
+ global 하게 사용할 state 의 초기값을 생성해준다.
+ reducer 가 분리될 경우 각각의 reducer 마다 initialState 를 지정해주어야 한다.
``` javascript
const initialState = {
  user: null,
  posts: [],
  isLoggedIn: false,
}
```

## reducer
+ action 에 따라 state 를 조작할 reducer 를 작성해준다.
+ reducer 는 항상 불변성을 지켜주어야 하므로 shallow copy 를 통해 항상 새로운 객체를 반환해준다.
  * spread syntax 를 주로 사용하며, 이것이 불편할 경우 immer library 를 사용하면 된다.
+ 실수를 방지하기 위해 꼭 default 를 설정해주는 것이 좋다. 
``` javascript
const reducer = (state, action) => {
  switch(action.type){
    case 'LOG_IN':{
      const { id, name, admin } = action.payload;
      return { ...state, user: { id, name, admin }, isLoggedIn: true };
    }
    case 'LOG_OUT':{
      return { ...state, user: null, isLoggedIn: false };
    }
    case 'ADD_POST':{
      const { userId, title, content } = action.payload;
      let nextId;
      if(state.posts.length === 0){
        nextId = 0;
      } else {
        nextId = Math.max(...state.posts.map(v => v.id)) + 1;
      }
      return { ...state , posts: [...state.posts, {id: nextId, userId, title, content} ] };
    }
    default:{
      return { ...state };
    }
  }
};
```


## createStore
+ 앞서 생성한 initialState, reducer 를 통해 store 를 생성해준다.
+ 생성한 store 는 react 에서 Provider 태그와 함께 컴포넌트에 state 를 제공해 줄 수 있다.
``` javascript
const store = createStore(reducer, initialState);
```


## dispatch
+ store 의 내장 함수 중 하나로, action을 인수로 담아 reducer를 실행시키는 함수이다
``` javascript
store.dispatch({type: 'LOG_IN', payload: {id: 0, name: 'seodev', admin: true}});
console.log("Action(LOG_IN):", store.getState());

store.dispatch({type: 'ADD_POST', payload: {userId: 0, title: 'Learning Redux', 'Hello, Redux ?'}});
console.log("Action(ADD_POST):", store.getState());

store.dispatch({type: 'LOG_OUT'});
console.log("Action(LOG_OUT):", store.getState());
```
