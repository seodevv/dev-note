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
// 메모제이션된 컴포넌트를 export
const MemoizedMovie = React.memo(Movie, moviePropsAreEqual);
export { MemoizedMovie };
```

### 언제 사용하지 말아야 할까?
  + 만약 위에서 언급한 상황에 일치하지 않는다면 React.memo() 를 사용할 필요가 없을 가능성이 높다.
  > 성능 관련 변경이 잘못 적용 된다면 성능이 오히려 악화될 수 있다.
  
