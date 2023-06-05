``` javascript
npm init -y

npm install express
npm install nodemon
npm install dotenv

// mongodb
npm install mongodb

// mysql
npm install mysql
// mysql promise
npm install mysql2

// passport
npm install passport passport-local passport-kakao express-session

// image file upload
npm install multer

// cookie
npm install cookie-parser

// optional
npm install ejs
npm install typescript ts-node @types/node @types/express
```

### template
``` javascript
require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const port = process.env.WEB_PROT || 8080;

app.listen(port, (req, res) => {
  console.log(`\n\n\n#### Litening Server <https://localhost:${port}> ####`);
});

```
