# socket.io

## Install
``` javascript
npm i socket.io // server side
npm i socket.io-client // client side
```

---
## Usage
### server - Creating connection
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

// creating connection
io.on('connection', (socket) => {
  console.log('a user connected');
});
```

### server - Disconnecting client
``` javascript
io.on('connection', (socket) => {
  console.log('a user connected');
  // client 가 disconnect 됬을 때
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
```

### both - Emitting events
> client
``` javascript
<script>
  var socket = io();
  var form = document.getElementById('form');
  var input = document.getElementById('input');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // server 측에 'chat message' 라는 event 를 input.value 를 담아서 보냄
    if (input.value) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
  });
</script>
```
> server
``` javascript
io.on('connection', (socket) => {
  // client 로부터 "chat message" event 로 emit 이 왔을 때 logic 을 실행한다.
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});
```

### server - Broadcasting
> client
``` javascript
<script>
  var socket = io();

  var messages = document.getElementById('messages');
  var form = document.getElementById('form');
  var input = document.getElementById('input');

  // server 측으로 input.value 를 emit
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
  });

  // client 측의 'chat message' event listener 을 생성
  // 받은 msg 를 통해 li tag 를 생성
  socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
</script>
```
> server
``` javascript
// If you want to send a message to everyone except for a certain emitting socket, we have the broadcast flag for emitting from that socket:
io.on('connection', (socket) => {
  socket.broadcast.emit('hi');
});
```
``` javascript
// In this case, for the sake of simplicity we’ll send the message to everyone, including the sender.
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
```

### server - namespace
``` javascript
// to attach a shared middleware to each namespace
io.on("new_namespace", (namespace) => {
  namespace.use(myMiddleware);
});

// to track the dynamically created namespaces
io.of(/\/nsp-\w+/);

io.on("new_namespace", (namespace) => {
  console.log(namespace.name);
});

// An alias for the main namespace (/).
io.sockets.emit("hi", "everyone");
// is equivalent to
io.of("/").emit("hi", "everyone");
```


---
## example
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
