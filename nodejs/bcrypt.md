# bcrypt
+ password 를 해시해주는 라이브러리
+ [Wikipedia](https://en.wikipedia.org/wiki/Bcrypt)
+ [How To Safely Store A Password](https://codahale.com/how-to-safely-store-a-password/)
+ [npm](https://www.npmjs.com/package/bcrypt)

## install
``` javascript
npm i -D bcrypt
```

## Usage
+ express 환경에서 사용하였고,
+ bcrypt 는 sync logic 과 async logic 이 존재하는데, async 를 추천하여 async 를 사용하였다.
+ http 구간 패스워드 암호화는 Client 단에서 [CryptoJS 라이브러리](https://github.com/seodevv/dev-note/blob/main/react/CryptoJS.md)를 사용하였다.
> routes/auth/login.js
``` javascript
const router = require('express').Router();
const { insertUser } = require('../../lib/user');
const bcrypt = require('bcrypt'); // bcrypt libraray 임포트

router.post('/signup', async (req, res) => { // async logic 으로 작성
  const { userId, password, phone } = req.body;
  const date = new Date().toISOString();

  if(!userId || !password){ // body 값에 id 와 password 가 없을 경우 return
    res.status(400).json({error: true, message: 'bad reqeuset'});
    return;
  }

  try {
    // hash method 를 사용하여 password 의 hash 값을 가져온다.
    // 첫 번쨰 인자로는 hash 할 password
    // 두 번째 인자로는 cost 가 들어간다. 이 값이 클수록 연산의 cost 가 증가한다. 기본 값은 10
    const hash = await bcrypt.hash(password, 10); 
    // 생성한 hash 와 기타 파라미터들을 mysql db 에 insert 시키는 함수로 전달한다.
    const result = await insertUser({userId, password: hash, phone, date});
    // 결과값을 response 객체에 담아 보낸다.
    res.json(result);
  } catch(error){
    res.json({error});
  }
});
module.exports = router;
```

> lib/user.js
``` javascript
const insertUser = async ({ userId, password, phone, date }) => {
  // mysql db 에 insert 하는 queryString 을 작성하고,
  let queryString =
    "INSERT INTO `user`(`userId`,`password`,`phone`,`email`,`regist`) VALUES (?, ?, ?, ?, ?)";
  try {
    // db connection 을 얻어와서 insert 결과 값을 얻는다.
    const connection = await chatDB();
    const [result] = await connection.query(queryString, [
      userId,
      password,
      phone,
      userId,
      date,
    ]);
    connection.end(); // 결과 값을 받았으면 db 커넥션을 종료하고
    return result; // 결과 값을 반환한다.
  } catch (error) {
    return error;
  }
};
```

> server.js
``` javascript
// ...
app.use("/auth", require("./routes/auth/login.js"));
```
