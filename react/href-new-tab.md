# href-new-tab
+ react 에서 href 를 새로운 탭으로 띄우는 방법을 설명한다.

## a tag
+ 알다시피 a tag 를 활용하여 새로운 탭을 띄울 수 있음.
+ rel 속성의...
+ noopener는 현재 활성화된 페이지와 새로운 탭에서 활성화되는 페이지를 별개의 프로세스로 취급한다.
+ noreferrer는 현재 활성화된 페이지의 정보를 새로운 탭에서 활성화되는 페이지에 전달하지 않는다.
``` javascript
export default function App() {
  return (
    <div className="App">
      <a href="https://www.naver.com/"
         target="_blank"
         rel="noopener noreferrer">
      Naver 이동</a>
    </div>
  );
```

## onClick
+ window.open() 메서드를 사용하여 새로운 탭을 띄운다.
+ 마찬가지로 url, target, option 등을 넣어주면 된다.
``` javascript
export default function App() {
  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <div className="App">
      <button onClick={() => handleOpenNewTab("https://www.naver.com/")}>
        Naver 이동
      </button>
    </div>
  );
}
```

#### source
+ https://developer-talk.tistory.com/862
