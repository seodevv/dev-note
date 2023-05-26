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
    * MemoizedMovie 의 렌더링 결과는 메모이징 되어있다. 만약 title 이나 releaseData 같은 props 가 변경되지 않는다면 다음 렌더링 때 메모이징 된 내용을 그대로 사용한다.
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
