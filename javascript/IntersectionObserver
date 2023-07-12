# IntersectionObserver
+ https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API
+ Intersection Observer API는 타겟 요소와 상위 요소 또는 최상위 document 의 viewport 사이의 intersection 내의 변화를 비동기적으로 관찰하는 방법입니다.

# Why using?
+ 페이지가 스크롤 되는 도중에 발생하는 이미지나 다른 컨텐츠의 지연 로딩.
+ 스크롤 시에, 더 많은 컨텐츠가 로드 및 렌더링되어 사용자가 페이지를 이동하지 않아도 되게 하는 infinite-scroll 을 구현.
+ 광고 수익을 계산하기 위한 용도로 광고의 가시성 보고.
+ 사용자에게 결과가 표시되는 여부에 따라 작업이나 애니메이션을 수행할 지 여부를 결정.

# Usage
``` javascript
const [observer, setObserver] = useState(
// IntersectionObserver 의 객체를 선언
// entries 는 observe 하고 있은 target 들의 배열이다.
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { // viewport 에 보일 경우의 logic 을 작성
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  })
);

const $targets = document.querySelectorAll('div');
$targets.forEach(target => {
  observer.observe(target);
});
```
