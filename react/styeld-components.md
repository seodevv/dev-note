# styled-components
+ css 로 styled 된 components 를 만들 수 있다.
+ props 를 사용하여 동적인 styled components 를 만들 수 있다.

# install
``` javascript
npm i styled-components // 6 버전이 이상하게 webpack 에서 build 가 안된다.
npm i styled-components@5.3.10 // 6 버전 build 가 안될 때 5 버전을 사용한다.
```

# Usage
+ 일반 변수처럼 styled.element 를 선언해주고,
+ props 를 사용할 경우 ${ props => props.parameter }  처럼 사용하면 된다.
``` javascript
import styled from 'styled-components';

// styled 된 div 를 Box 변수로 선언
const Box = styled.div`
  padding : 20px;
  width: 300px;
  height: 300px;
`;

const Btn = styled.button`
  // props 를 다음과 같이 사용 
  background : ${ props => props.bg };
  color : black;
  padding : 10px;
`;

function StyeldComponents(){
  return (
    <div>
      // Box 변수를 Components 처럼 사용
      <Box>
        <Btn bg="yellow" >노랑이 버튼</YellowBtn>
      </Box>
    </div>
  )
}
```
