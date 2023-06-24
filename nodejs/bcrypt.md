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

### hash
+ 평문 상태의 password 를 암호화 한다.
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

### compare
+ password 체크를 할 때 사용자로부터 입력 받은 plainPassword 와 DB 에 저장된 decryptedPassword 를 비교함
+ hash 와 마찬가지로 async logic 으로 작성 가능
> routes/auth/login.js
``` javascript
// ...
router.post("/compare", async (req, res) => {
  const { userId, password } = req.body;

  if (!userId || !password) {
    res.status(400).json({ error: true, message: "bad request" });
    return;
  }

  // CryptoJS 로 http 구간 암호화 했던 것을 복호화하는 과정
  const decryptedPassword = CryptoJS.AES.decrypt(
    password,
    process.env.CRYPTO_SECRET_KEY
  ).toString(CryptoJS.enc.Utf8);

  try {
    // DB 에서 user 정보를 찾음
    const [result] = await selectPasswordUser({ userId });
    
    if (result) {
      // user 정보가 있다면 사용자로부터 입력받은 password 와 db 에 저장된 hash password 를 비교
      // 결과 값은 같으면 true, 다르면 false
      const compared = await bcrypt.compare(decryptedPassword, result.password);
      res.json({ compared }); // 결과 값을 response 에 반환
      return;
    }
    res.json({ compared: false });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});
```
> lib/user.js
``` javascript
// ...
const selectPasswordUser = async ({ userId }) => {
  let queryString = `SELECT password FROM user WHERE userId = "${userId}"`;
  try {
    const connection = await chatDB();
    const [rows] = await connection.query(queryString);
    connection.end();
    return rows;
  } catch (error) {
    throw error;
  }
};
```
