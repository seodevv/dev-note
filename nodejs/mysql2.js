# declare
# ./lib/db.js
// mysql2 라이브러리 import
const mysql = require("mysql2/promise"); 

// connection 을 return 하는 함수 선언
const db = async () => {
  try {
  
    // mysql connection 을 생성한다.
    let connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_INSTANCE,
    });
    
    return connection; // 생성한 connection 을 return
    
  } catch (error) {
    return new Error(error); // connection 생성 시 에러가 발생하면 error 를 return
  }
};

// 특정 query 를 실행하는 함수 선언
const selectExample = async () => {
  try {
    let connection = await db();
    let [rows] = await connection.query("SELECT * FROM example");
    connection.end(); // SQL 질의 후에 커넥션을 항상 끊어주는 습관을 갖는다.
    return rows;
  } catch (error) {
    return new Error(error);
  }
};

// 만든 함수들을 exports
module.exports = db;
module.exports = {
  selectExample,
};




# Usage
# server.js
require("dotenv").config(); // dotenv 라이브러리 import
const express = require("express"); // express 라이브러리 import
const app = express(); // app 선언
const db = require("./lib/db"); // 위에 만든 db.js 를 import

// 8080 포트로 server open
app.listen(8080, (req, res) => {
  console.log(`\n\n\n#### Litening Server <https://localhost:8080> ####`);
});

// example 로 post 요청 시 example 테이블 rows 를 비동기로 응답
app.post("/example", async (req, res) => {
  try {
    let examples = await db.selectExample(); // db.js 의 selectExamples 함수를 실행해 결과(rows) 를 기다림
    res.json(examples); // 결과(rows)를 응답
  } catch {
    res.json({ error: examples }); // error 가 발생할 경우 error 정보를 응답
  }
});


