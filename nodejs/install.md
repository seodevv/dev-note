### basic
``` javascript
npm init -y

npm install express
npm install nodemon
npm install dotenv
``` 

### include db
```
npm install mongodb // mongodb
npm install mysql // mysql
npm install mysql2 // mysql promise
```

### if passport
``` javascript
npm install passport passport-local passport-kakao express-session
``` 

### if multer
``` 
npm install multer // image file upload
```

### if use cookie
```
npm install cookie-parser
```

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

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const port = process.env.WEB_PROT || 8080;

app.listen(port, (req, res) => {
  console.log(`\n\n\n#### Litening Server <https://localhost:${port}> ####`);
});

```
