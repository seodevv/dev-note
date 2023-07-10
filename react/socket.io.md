# socket.io

## install
``` javascript
npm i socket.io // server side
npm i socket.io-client // client side
```

## usage
> server.js
``` javascript
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

// listening the http server
const serverPort = process.env.SERVER_PORT || 8080;
const serverIp = process.env.SERVER_HOST || "0.0.0.0";
server.listen(serverPort, serverIp, () => {
  console.log(`litening on ${serverIp}:${serverPort}`);
});

// web socket connection 을 관리한다.
io.on("connection", (socket) => {
  // 연결된 client 를 관리하는 배열을 초기화해준다.
  const clients = [];

  // client 측에서 'login' 이벤트로 emit 할 경우 client 를 등록함
  // client uid 를 기록하기 위해 따로 event 로 처리함
  socket.on("login", (data) => {
    const user = {
      id: socket.id,
      uid: data.uid,
    };
    clients.push(user);
    for (client of clients) {
      console.log(`[${client.uid}] ${client.id}`);
    }
  });

  // client disconnect 시 client 를 제거함
  socket.on("disconnect", () => {
    console.log(`[${socket.id}] user disconnected`);
    const index = clients.findIndex((client) => client.id === socket.id);
    if (index) {
      clients.splice(index, 1);
    }
  });

  // client 로부터 "message" 이벤트를 통해 message 를 받음
  socket.on("message", (data) => {
    console.log(`${data.id}: ${data.message}`);
    io.emit("message", "hi!"); // 서버 응답
  });
});
```
