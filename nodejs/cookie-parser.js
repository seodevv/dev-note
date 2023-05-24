# install
npm install cookie-parser


# declare
// cookie-parser 라이브러리 import
const cookieParser = require('cookie-parser'); 


// 미들웨어 설정
app.use(cookieParser());


// Set cookie
app.post('/cookie/set/:key', (req, res) => {
  var key = req.params.key; // URL 파라미터로 세팅할 cookie 의 key 값을 받는다.
  var data = req.body; // body 파라미터로 세팅할 cookie 의 data 값을 받는다.
  var option = { // Cookie 의 옵션을 설정
    maxAge: 1000 * 60 * 60, // 단위는 ms 로 쿠키의 최대 수명을 담는다.
  }
  res.cookie(key, data, option); // response 객체에 생성한 쿠키를 담는다.
  res.json({ message: `<${key}> set cookie` });
});
// option
{
  maxAge : 현재 시간으로부터 만료 시간을 ms 단위로 설정한다.
  expires : 만료 날짜를 GMT 시간으로 설정한다. 지정되어 있지 않거나 0 으로 지정 시 session cookie 로 생성한다.
  path : cookie의 경로를 설정한다. 기본 경로는 "/"
  domain : cookie 의 domain name. 기본 domain name 은 loaded 이다.
  secure : HTTPS 에서만 cookie 를 사용할 수 있도록 한다.
  httpOnly : 웹 서버를 통해서만 cookie 에 접근할 수 있도록 한다.
  signed : cookie 가 서명되어야 할 지를 결정한다.
}


// Get cookie
// 전체 cookie 를 응답하는 URL
app.get("/cookie/get", (req, res) => { 
  var cookies = req.cookies; // request 요청 객체에서 cookies 값을 가져온다.
  if (Object.keys(cookies).length === 0) { // cookies 값이 없을 경우 
    res.json({ message: "cookie is empty" }); // cookies 가 비어있음을 응답한다.
    return;
  }
  res.json(cookies); // 설정된 cookies 값을 전부 응답한다.
});

// 특정 key 값을 가지는 cookies 를 응답하는 URL
app.get("/cookie/get/:key", (req, res) => {
  var key = req.params.key; // URL 파라미터로 받은 key 값을 key 변수에 저장한다.
  var cookies = req.cookies; // request 요청 객체에서 cookies 값을 가져온다.
  if (Object.keys(cookies).length === 0) { // cookies 값이 없을 경우
    res.json({ message: "cookie is empty" }); // cookies 가 비어있음을 응답한다.
    return;
  }
  res.json(cookies[key]); // 해당 key 의 cookies 값을 응답한다.
});


// Clear cookie
// 전체 cookie 를 clear 하는 URL
app.delete("/cookie/clear", (req, res) => {
  var cookies = req.cookies; // cookie 값을 가져옴
  if (Object.keys(cookies).length === 0) { // cookies 비었을 경우
    res.send({ message: "Already cookie empty" }); // cookies 가 비어있음을 응답한다.
    return;
  }
  for (key of Object.keys(cookies)) { // cookies 의 key 값을 가져와 반복문 실행
    res.clearCookie(key); // key 값이 돌아가며 clear 된다.
  }
  res.json({ message: `All cookies clear success` });
});

app.delete("/cookie/clear/:key", (req, res) => {
  var key = req.params.key; // URL 파라미터로 받은 key 값을 key 변수에 저장한다.
  var cookies = req.cookies; // request 요청 객체에서 cookies 값을 가져온다.
  if (Object.keys(cookies).length === 0 || !cookies[key]) { // cookies 값이 없을 경우 or 해당 key 의 cookie 가 없을 경우
    res.send({ message: "Already cookie empty" }); // cookies 가 비어있음을 응답한다.
    return;
  }
  res.clearCookie(key); // 해당 key 의 cookie 값을 clear 한다.
  res.json({ message: `<${key}> clear cookies success` });
});
