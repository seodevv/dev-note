# Event

## event.nativeEvent.isComposing
+ Input 에서 한글을 사용하는 경우 Submit 이 2번 실행되는 현상이 발생한다.
+ 한글의 경우 자음과 모음으로 이루어진 조합 문자이기 때문에 글자가 조합 중인지, 조합이 끝난 상태인지 알 수 없기 때문
+ 이럴 때 event.nativeEvent.isComposing 으로 인하여 false 인 경우만 처리하여 1번만 submit 이 일어나도록 할 수 있다.
``` javascript
import React, {useState} from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const onChangeTitle = (e) => setTitle(e.target.value);

  const [result, setResult] = useState('');
  const onClickSubmit = (e) => {
    console.log(e.target.value, e.nativeEvent.isComposing);
    if(e.target.value.trim() && !e.antiveEvent.isComposing){
      setResult(title);
    }
  };
  return (
    <>
      <form>
        <input type="text" value="title" onChange={onChangeTitle}/>
        <button type="button" onClick={onClickSubmit}>Submit</button>
      </form>
      <h1>{result}</h1>
    </>
  )
}
export default App;
```
