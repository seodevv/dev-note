### basic
``` javascript
npm init -y

npm install express
npm install nodemon
npm install dotenv
npm install cors
``` 

### include db
```
npm install mongodb
npm install mysql
npm install mysql2
```
    * mongodb : mongodb 를 사용하기 위한 패키지
    * mysql : mysql 을 사용하기 위한 패키지
    * mysql2 : mysql 을 promise 처럼 사용하기 위한 패키지

### if passport
``` javascript
npm install passport passport-local passport-kakao express-session
``` 
    * session 방식의 로그인 인증 방식을 구현하기 위한 패키지

### if multer
``` 
npm install multer // image file upload
```
    * 파일을 업로드하기 위한 패키지

### if use cookie
```
npm install cookie-parser
```
    * 쿠키를 관리하기 위한 패키지

### optional
``` javascript
npm install ejs // views
npm install typescript ts-node @types/node @types/express // typescript
```

### template
``` javascript
require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const port = process.env.WEB_PROT || 8080;

app.listen(port, (req, res) => {
  console.log(`\n\n\n#### Litening Server <https://localhost:${port}> ####`);
});

```
