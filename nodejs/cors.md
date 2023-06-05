# cors
+ CORS 란 자신이 속하지 않은 다른 도메인, 다른 프로토콜, 혹은 다른 포트에 있는 리소스를 요청하는 cross-origin HTTP 요청 방식이다. 
+ 다양한 옵션으로 cors 를 활성화하는데 사용할 수 있는 Connect/Express 미들웨어를 제공하는 패키지이다.


## install
``` javascript
npm i cors
```


## Usage
### Simple Usage
+ 모든 도메인에 대한 허용
``` javascript
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.listen(8080, () => {
  console.log('Cors-enabled web server listening on port 8080');
});

app.get('/product/:id', (req, res, next) => {
  res.json({msg: 'This is Cors-enabled for all origins!'});
});
```
