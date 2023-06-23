# CryptoJS
+ 해쉬 알고리즘을 사용하여 암호화 해주는 라이브러리이다.
+ secretKey 를 사용해 암호화할 수 있고, 동일한 secretKey 를 통해 복호화할 수 있다.
+ 본인은 개발자 도구에서 패스워드가 평문으로 노출되는 것을 막기 위해 사용하였다.

## install
``` javascript
npm i crypto-js
```

## Usage
+ 고유한 secretKey 를 만들고, crypto-js 의 해쉬 알고리즘을 사용하여 data 를 encrypt 를 하면 된다.
``` javascript
import React, {useState} from 'react';
import CryptoJS from 'crypto-js';

const App = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form>
      <input type="text" value/>
      <input type="password"/>
      <button type="submit"/>
    </form>
  )
}
```
