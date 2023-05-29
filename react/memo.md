# Memoizing
+ UI 성능을 증가시키기 위해, 렌더링 결과를 메모이징(Memoizing)함으로써, 불필요한 리렌더링을 막는 함수이다.


## React.render()
+ React는 먼저 컴포넌트를 렌더링(rendering) 한 뒤, 이전 렌더된 결과와 비교하여 DOM 업데이트를 결정한다.
+ 만약 렌더 결과가 다르다면, React는 DOM을 업데이트한다.
+ 이전 렌더링 결과와 다음 렌더링 결과의 비교는 빠르다. 하지만 이 과정에서 속도를 좀 더 높일 수 있다.


## React.memo()
+ 컴포넌트가 React.memo() 로 래핑 될 때, React는 컴포넌트를 렌더링하고 결과를 메모이징(Memoizing)한다.
+ 그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징된 내용을 재사용한다.
``` javascript
export function Movie({ title, releaseDate }){
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  )
}
export const MemoizedMovie = React.memo(Movie);
```
    * React.memo(Movie)는 새로 메모이징된 컴포넌트인 MemoizedMovie 를 반환한다.
    * 한가지 차이점을 제외하고 원래의 Movie 컴포넌트와 같은 결과를 나타낼 것이다.
    * MemoizedMovie 의 렌더링 결과는 메모이징 되어있다. 
    * 만약 title 이나 releaseData 같은 props 가 변경되지 않는다면 다음 렌더링 때 메모이징 된 내용을 그대로 사용한다.
``` javascript
// 첫 렌더이다. React 는 MemoizedMovie 함수를 호출한다.
<MemoizedMovie
  movieTitle="Heat"
  releaseDate="December 15, 1995"
/>
    
// 리 렌더이다. React 는 MemoizedMovie 함수를 호출하지 않는다.
<MemoizedMovie
  movieTitle="Heat"
  releaseDate="December 15, 1995"
/>
```
    * 메모이징한 결과를 재사용 함으로써,
    * React에서 리렌더링할 때 가상 DOM에서 달라진 부분을 확인하지 않아 성능 상의 이점을 누릴 수 있다.
    * 클래스 컴포넌트 또한 PureComponent 로 동일한 내용이 구현되어 있다.
    
    
### Syntax
  + React.memo() 는 props 혹은 props 의 객체를 비교할 때 얕은(shallow) 비교를 한다.
  + 비교 방식을 수정하고 싶다면 React.memo() 두 번째 인자로 비교 함수를 만들어 넘겨주면 된다.
``` javascript
React.memo(Component [, areEqual(prevProps, nextProps)]);
```
    * areEqual(prevProps, nextProps) 함수는 prevProps 와 nextProps 가 같다면 true 를 반환할 것이다.
``` javascript
function moviePropsAreEqual(prevMovie, nextMovie){
  return (
    prevMovie.title === nextMovie.title &&
    prevMovie.releaseDate === nextMovie.releaseDate
  )
}
const MemoizedMovie2 = React.memo(Movie, moviePropsAreEqual);
```
    * moviePropsAreEqual() 함수는 이전 props와 현재 props 가 같다면 true 를 반환할 것이다.
    

### 언제 사용해야 할까?
  + React.memo() 는 함수 컴포넌트에 적용되어 같은 props 에 같은 렌더링 결과를 제공한다.
  + React.memo() 를 사용하기 가장 좋은 케이스는 함수 컴포넌트가 같은 props로 자주 렌더링 될거라 예상될 때이다.
  + 일반적으로 부모 컴포넌트에 의해 하위 컴포넌트가 같은 props 로 자주 리렌더링 될 때가 있다.
``` javascript
// 실시간으로 업데이트되는 영화 조회수를 나타내는 부모 컴포넌트 MovieViewsRealtime
// 하위 컴포넌트로 Movie 컴포넌트를 사용한다.
function MovieViewsRealtime({ title, releaseDate, views }) {
  return (
    <div>
      <Movie title={title} releaseDate={releaseDate} />
      Movie views: {views}
    </div>
  );
}
```
    * 이 어플리케이션은 주기적(매초)으로 서버에서 데이터를 폴링(Polling) 해서 
    * MovieViewsRealtime 컴포넌트의 views 를 업데이트 한다.
``` javascript
// 첫 렌더
<MovieViewsRealtime
  views={0}
  title="Forrest Gump"
  releaseDate="June 23, 1994"
/>

// 1초 후 렌더
<MovieViewsRealtime
  views={10}
  title="Forrest Gump"
  releaseDate="June 23, 1994"
/>

// 2초 후 렌더
<MovieViewsRealtime
  views={25}
  title="Forrest Gump"
  releaseDate="June 23, 1994"
/>

// etc
```
    * views 가 새로운 숫자로 업데이트 될 때마다 MovieViewsRealtime 컴포넌트 또한 리렌더링 된다.
    * 이 때 Movie 컴포넌트 또한 title, releaseDate 가 같음에도 views 로 인해 리렌더링된다.
    * 이 때가 Movie 컴포넌트에 React.memo() 를 적용할 적절한 케이스이다.
``` javascript
// Movie 컴포넌트 
export function Movie({ title, releaseDate }){
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  )
}
// 언제 리렌더링을 할 것인가에 대한 함수를 작성
// props.title 과 props.releaseDate 가 이전 값과 같은 경우 리렌더링을 하지 않는다.
function moviePropsAreEqual(prevMovie, nextMovie){
  return (
    prevMovie.title === nextMovie.title &&
    prevMovie.releaseDate === nextMovie.releaseDate
  )
}
// 메모이제이션된 컴포넌트를 export
const MemoizedMovie = React.memo(Movie, moviePropsAreEqual);
export { MemoizedMovie };
```

### 언제 사용하지 말아야 할까?
  + 만약 위에서 언급한 상황에 일치하지 않는다면 React.memo() 를 사용할 필요가 없을 가능성이 높다.
  > 성능 관련 변경이 잘못 적용 된다면 성능이 오히려 악화될 수 있다.
  + 또한, 기술적으로 가능하지만 클래스 컴포넌트를 React.memo() 로 래핑하는 것은 적절하지 않다.
  + 클래스 컴포넌트에서는 PureComponent 와 shouldComponentUpdate() 를 사용하자.

##### 쓸모 없는 props 비교
  + 렌더링될 때 props 가 다른 경우가 대부분인 컴포넌트를 생각해보면, 메모이제이션 기법의 이점을 얻기 힘들다.
  + props 가 자주 변하는 컴포넌트를 React.memo() 로 래핑한다면, React 는 두 가지 작업을 리렌더링할 때 수행할 것이다.
  1. 이전 props와 다음 props 의 동등 비교 함수를 수행
  2. 비교 함수는 거의 항상 false 를 반환할 것이기 때문에, React 는 이전 렌더링 내용과 다음 렌더링 내용을 비교할 것이다.


### React.memo() 와 콜백 함수
  + 함수 객체는 "일반" 객체와 동일한 비교 원칙을 따른다.
  + 함수 객체는 오직 자신에게만 동일하다.
``` javascript
function sumFactory() {
  return (a, b) => a + b;
}

const sum1 = sumFactory();
const sum2 = sumFactory();
console.log(sum1 === sum2); // false
console.log(sum1 === sum1); // true
console.log(sum2 === sum2); // true
```
    * sumFactory() 는 팩토리 함수이다. 이 함수는 2가지 숫자를 더해주는 화살표 함수를 반환한다.
    * sum1 과 sum2 는 팩토리에 의해 생성된 함수이다. 두 함수 모두 두 숫자를 더해주는 함수이다. 
    * 하지만 sum1 과 sum2 는 다른 함수 객체이다.
  + 부모 컴포넌트가 자식 컴포넌트의 콜백 함수를 정의한다면, 새 함수가 암시적으로 생성될 수 있다.
  + 이것이 어떻게 메모이제이션을 막는지 보고, 수정해보자.
``` javascript
function Logout({ username, onLogout }) {
  return <div onClick={onLogout}>Logout {username}</div>;
}

const MemoizedLogout = React.memo(Logout);
export { MemoizedLogout };
```
    * 함수의 동등성이란 함정 때문에, 메모이제이션을 적용할 때는 콜백을 받는 컴포넌트 관리에 주의해야 한다.
    * 리렌더를 할 때 마다 부모 함수가 다른 콜백 함수의 인스턴스를 넘길 가능성이 있다.
``` javascript
function MyApp({ store, cookies }) {
  const onLogout = () => {
    cookies.clear();
  });
  return (
    <div className="main">
      <header>
        <MemoizedLogout
          username={store.username}
          onLogout={() => cookies.clear()}
        />
      </header>
      {store.content}
    </div>
  );
}
```
    * 동일한 username 값이 전달되더라도, 
    * MemoizedLogout 은 새로운 onLogout 콜백 때문에 리렌더링을 하게 된다.
  > 메모이제이션이 중단된다 !
  + 이 문제를 해결하려면 onLogout props 의 값을 매번 동일한 콜백 인스턴스로 설정해야만 한다.
  + useCallback() 을 이용해서 콜백 인스턴스를 보존시켜보자.
``` javascript
function MyApp({ store, cookies }) {
  const onLogout = useCallback(() => {
    cookies.clear();
  }, []);
  return (
    <div className="main">
      <header>
        <MemoizedLogout username={store.username} onLogout={onLogout} />
      </header>
      {store.content}
    </div>
  );
}
```
    * useCallback(() => { cookies.clear() }, []) 는 항상 같은 함수 인스턴스를 반환한다.
    * MemoizedLogout 의 메모이제이션이 정상적으로 동작하도록 수정되었다.
    
### React.memo() 는 성능 개선의 도구이다.
  + 엄밀히 말하면, React 에서는 성능 개선을 위한 하나의 도구로 메모이제이션을 사용한다.
  + 대부분의 상황에서 React 는 메모이징 된 컴포넌트의 리렌더링을 피할 수 있지만, 렌더링을 막기 위해 메모이제이션에 의존하면 안된다.

### 결론
  + React.memo() 는 함수 컴포넌트에서도 메모이제이션의 장점을 얻게 해주는 훌륭한 도구다.
  + 올바르게 적용 된다면 변경되지 않은 동일한 props 에 대해 리렌더링을 막아줄 것이다.
  > 다만 ! 콜백 함수를 props 로 사용하는 경우는 주의해라 ! (동일한 콜백 함수 인스턴스를 넘기는지 확인해라 !)
  + 메모이제이션의 성능상 이점을 측정하기 위해 profiling 을 사용하는 것을 잊지 마라.


###### 출처 : https://ui.toast.com/weekly-pick/ko_20190731
