# React.memo()
+ UI 성능을 증가시키기 위해, 렌더링 결과를 메모이징(Memoizing)함으로써, 불필요한 리렌더링을 막는 함수이다.
``` javascript
export function Movie({ title, releaseDate }){
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  )
}
      * asdf
