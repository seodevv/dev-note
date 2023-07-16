# router
+ express 에서 url 을 분리하고 싶을 때 router 를 사용한다.

## Usage
> routes/board/board.js
///board 페이지를 처리할 라우터를 생성한다.
``` javascript
const router = require("express").Router();

router.get("/", (req, res) => {
  var element = "<h4>This is board router</h4>";
  res.send(element);
});

module.exports = router;
```


> server.js
``` javascript
// /board 이하로 받는 모든 요청은 해당 라우터에서 처리된다.
app.use('/board', require('./routes/board/board'); 
```
