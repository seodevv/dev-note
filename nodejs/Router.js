# /board 페이지를 처리할 라우터를 생성한다.
# routes/board/board.js
const router = require("express").Router();

router.get("/", (req, res) => {
  var element = "<h4>This is board router</h4>";
  res.send(element);
});

module.exports = router;



# server.js
app.use('/board', require('./routes/board/board'); 
// /board 이하로 받는 모든 요청은 해당 라우터에서 처리된다.
