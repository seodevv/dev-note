---
### useState
  + 컴포넌트의 state(상태)를 관리 할 수 있다.
  + state 변경될 경우 해당 state 를 사용하는 컴포넌트가 자동으로 재랜더링된다.
``` javascript
import { useState } from 'react';
const [state, setState] = useState<type>(initialValue);
const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
```



---
### useEffect
  + 랜더링 이후에 실행할 코드를 만들 수 있다.
  + 어떤 변수가 변경될 때마다(의존성) 특정 기능이 동작하도록 할 수 있다.
  + return 안의 코드가 먼저 실행되고 콜백 함수 안의 내용이 다음으로 실행된다.
  + useLayoutEffect 와의 차이점은 useEffect 는 비동기 방식으로 처리된다.
```
import { useEffect } from 'react';
const [data, setData] = useState<boolean>(false);

useEffect( () => {
  console.log("useEffect(callback): Run second");
  return () => {
    console.log("useEffect(return): Run first");
  }
}, [data] );
```
  + 최초 랜더링될 땐 return 안의 코드는 생략된다.
  + 재랜더링할 경우 return 안의 코드가 먼저 실행된 후, callback 안의 코드가 실행된다.



-------------------------------------------------------------------------------------
useLayoutEffect
// 모든 DOM 변경 후 브라우저가 화면을 그리기(render) 전에 실행되는 기능을 정할 수 있다.
// useEffect 와의 차이점은 useLayoutEffect 는 동기 방식으로 처리된다.
----------------------------------   [ code ]   -------------------------------------
import { useLayoutEffect } from 'react';
const [data, setData] = useState<boolean>(false);

useLayoutEffect( () => {
  console.log("useLayoutEffect(callback): Run second");
  return () => {
    console.log("useLayoutEffect(return): Run first");
  }
}, [data]);

// 최초 랜더링될 땐 return 안의 코드는 생략된다.
// 재랜더링할 경우 return 안의 코드가 먼저 실행된 후, callback 안의 코드가 실행된다.



-------------------------------------------------------------------------------------
useCallback<type>(callback, [dependency])
// 의존성 배열에 적힌 값이 변할 때만, 함수를 다시 정의할 수 있다.
// 의존성 배열에 적힌 값이 없을 경우, 컴포넌트가 재랜더링될 때 함수가 다시 정의된다.
// useMemo 와의 차이점은 useCallback 은 함수를 반환한다.
----------------------------------   [ code ]   -------------------------------------
import { useCallback } from 'react';

const [data, setData] = useState<string>('string');
const callback = useCallback( () => {
  alert(data + ' value');
 }, [data]);

// data state 가 변경될 때만 alert 함수가 재정의된다.
// alert 는 useCallback 을 사용했기 때문에 callback 변수는 함수를 가진다.



-------------------------------------------------------------------------------------
useMemo<type>(callback, [dependency])
// 의존성 배열에 적힌 값이 변할 때만, 함수를 다시 정의할 수 있다.
// 의존성 배열에 적힌 값이 없을 경우, 컴포넌트가 재랜더링될 때 함수가 다시 정의된다.
// useCallback 과의 차이점은 useMemo 는 return 값을 반환한다.
----------------------------------   [ code ]   -------------------------------------
import { useMemo } from 'react';

const [data, setData] = useState<string>('string');
const memo = useMemo( () => {
  return data + ' value';
}, [data]);

// data state 가 변경될 때만 memo 함수가 재정의된다.
// memo 는 useMemo 를 사용했기 때문에 memo 변수는 string 값을 가진다.



-------------------------------------------------------------------------------------
useRef<type>
// 컴포넌트나 HTML 요소를 래퍼런스로 관리할 수 있다.
// useState 와 다르게 값이 변해도 재랜더링이 되지 않는다.
// 변수와 다르게 재랜더링 시에도 값을 잃지 않는다.
----------------------------------   [ code ]   -------------------------------------
import { useRef } from 'react';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  // Element 혹은 컴포넌트에 사용할 useRef 를 초기화
  // 제네릭에 Ref 의 Element 타입을 지정해주어야 Element 요소를 사용할 수 있다.
  function printInput() {
    if(inputRef !== null) console.log(inputRef.current.value);
  };
  // 
  
  const countRef = useRef<number>(0);
  // 변수로 사용할 useRef 를 초기화
  // 제네릭을 통해 변수 타입을 지정해준다.
  function increaseCount(){
    console.log(++countRef.current);
  }
  
  return (
    <>
      <input ref={inputRef} onChange={printInput}/>
      // input 값이 변할 때마다 printInput 함수를 실행
      <button onClick={increaseCount}>{countRef.current}</button>
      // button 을 클릭할 때마다 increaseCount 함수를 실행
      // 클릭할 때마다 countRef.current 값이 변하나 재 랜더링이 되지 않는다.
    </>
  )
}



-------------------------------------------------------------------------------------
forwardRef
// useRef 로 만든 래퍼런스를 상위 컴포넌트로 전달할 수 있다.
// 부모 컴포넌트에 useRef 를 만들고, 자식 컴포넌트에 ref 형태로 넘긴다.
---------------------------------   [ code 1 ]   ------------------------------------
# 1. (./src/App.tsx) // useRef 을 선언하고 이를 컨트롤하는 함수를 선언
import { useRef } from 'react';
import { Child } from './components/Child';

function App(){
  const inputRef = useRef<HTMLInputElement>(null);
  // useRef 를 통해 ref 를 선언한다. ref 선언 시 Element 타입을 제네릭이 넣어주어야 한다.
  
  function focusInput(){
    if(inputRef.current !== null){
      inputRef.current.focus();
    }
  }
  // inputRef 요소에 focus 하는 함수
  
  return (
    <>
      <button onClick={focusInput}>Focus</button>
      <Child ref={inputRef} />
      // 자식 컴포넌트에 ref 를 넘긴다.
    </>
  );
}
export default App;

---------------------------------   [ code 2 ]   ------------------------------------
# 2. (./src/components/Child.tsx)
import { ForwardedRef, forwardRef } from 'react';

interface Props {
  children?: string
}
// Props 에 대한 타입을 선언

type Ref = ForwardedRef<HTMLInputElement>;
// Ref 에 대한 타입을 선언한다. ForwardedRef 에 Element 타입을 제네릭에 넣는다.
// * 이 부분이 중요하다.

function _Child(props:Props, ref:Ref){
  return <input ref={ref} />;
}
// props, ref 타입을 지정해준 함수 컴포넌트를 생성한다.

export const Child = forwardRef<HTMLInputElement, Props>(_Child);
// forwardRef 함수에 컴포넌트를 인자로 담아 export 한다.
// 제네릭에는 ref를 사용한 Element 타입, Props 타입을 담는다.
// * 이 부분이 중요하다.



-------------------------------------------------------------------------------------
useReducer
// state(상태) 업데이트 로직을, reducer 함수에 따로 분리할 수 있다.
// state : 상태
// action : 변화내용 객체
// reducer : state 와 action 을 인자로 받아 다음 상태를 변환하는 함수
// dispatch : action 을 반환하는 함수
----------------------------------   [ code ]   -------------------------------------
# 1. (./src/components/Counter.tsx) // useReducer 를 사용하는 컴포넌트
import { useReducer } from 'react';

// state 및 action 에 관련된 타입을 정의한다.
type state = number;
type action = {
  type: 'INCREASE' | 'DECREASE';
}
// type 에 따라 payload 가 다를 경우 아래와 같이 정의하는게 편하다.
type action = 
 | { type: 'INCREASE' }
 | { type: 'DECREASE', payload: number }

// state 를 변경할 함수를 정의한다.
// action.type 에 따라 다르게 state 를 변경한다.
function reducer(state, action){
  switch(action.type){
    case 'INCREASE':
      return state += 1;
    case 'DECREASE':
      return state -= 1;
    default:
      return state;
  }
}

// Reducer 의 초기값으로 사용할 변수를 선언한다.
const initialState = 0;

function Counter(){
  // useReducer 를 사용하여 reducer 를 선언 및 초기화한다.
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // action.type 에 따라 다르게 사용할 dispatch 를 사용할 함수를 만든다.
  function onIncrease(){
    dispatch({type: 'INCREASE'});
  }
  function onDecrease(){
    dispatch({type: 'DECREASE'});
  }
  
  return (
    <>
      <div className="container">
        <h1>{state}</h4>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </>
  )
}
export default Counter;




-------------------------------------------------------------------------------------
useContext
// 부모 컴포넌트와 자식 컴포넌트 간의 변수와 함수를 전역적으로 정의할 수 있다.
// 컴포넌트가 많아질 경우 props 를 다단계로 거쳐야하는 코드를 줄일 수 있다.
// 컨텍스트를 불러올 때 불필요한 호출이 발생한다.
---------------------------------   [ code 1 ]   ------------------------------------
# 1 (./src/context/newContext.ts) // 컨텍스트 생성 및 변수를 생성하는 곳

import { createContext } from 'react';

type Products = {
  id: number,
  title: string,
}[];

const products:Products = [
  { id: 0, title: 'shoes' },
  { id: 1, title: 'shirt' },
  { id: 2, title: 'jacket' },
]

const newContext = createContext(products);
// 전역으로 사용할 변수를 초기화하고 createContext 를 통해 컨텍스트를 생성한다.

export { newContext products };
export type { Products };
// 사용할 컨텍스트와 초기화된 변수를 export 해준다.

---------------------------------   [ code 2 ]   ------------------------------------
# 2 (./src/App.tsx) // 자식 컴포넌트들에게 컨텍스트를 제공해준다.

import { Routes, Route } from 'react-router-dom';
import { newContext, products } from './context/newContext';
import Home from './components/Home';

function App() {
  const item = products;
  // 컨텍스트에서 초기화한 변수를 가져온다.
  return (
    <>
      <newContext.Provider value={item}>
      // 초기화한 변수를 자식 컴포넌트에게 제공한다.
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </newContext.Provider>
    </>
  )
}
export default App;

---------------------------------   [ code 3 ]   ------------------------------------
# 3 (./src/components/Home.tsx) // 컨텍스트로 받은 변수를 사용한다.
import { useContext } from 'react';
import { newContext } from '../Context/newContext';

function Home(){
  const item = useContext(newContext);
  // 컨텍스트 변수를 useContext 를 활용해 불러온다.
  return (
    <>
      <div className="container">
        <ul>
          { item.map( v => (<li key={v.id}>{v.title}</li>) );
        </ul>
        // 컨텍스트 변수를 활용해 ReactNode 를 작성한다.
      </div>
    </>
  )
}
export default Home;
