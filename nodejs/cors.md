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
+ 미들웨어 설정을 통해 모든 도메인에 대하여 허용할 수 있다.


### Enable CORS for a single Route
``` javascript
const express = require('express');
const app = express();
const cors = require('cors');

app.listen(8080, () => {
  console.log('Cors-enabled web server listening on port 8080');
});

app.get('/product/:id', cors(), (req, res, next) => {
  res.json({msg: 'This is Cors-enabled for all origins!'});
});
```
+ 위와 같이 /product/:id 라우트에만 cors 정책을 허용할 수 있다.


### Configuring CORS
``` javascript
var express = require('express')
var cors = require('cors')
var app = express()

app.listen(8080, () => {
  console.log('Cors-enabled web server listening on port 8080');
});

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})
```
+ corsOption 을 통해 특정 도메인에 대하여 cors 정책을 허용할 수 있다.


###
