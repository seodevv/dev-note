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

io.on("connection", (socket) => {
  const clients = [];

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

  socket.on("disconnect", () => {
    console.log(`[${socket.id}] user disconnected`);
    const index = clients.findIndex((client) => client.id === socket.id);
    if (index) {
      clients.splice(index, 1);
    }
  });

  socket.on("message", (data) => {
    console.log(`${data.id}: ${data.message}`);
    io.emit("message", "hi!");
  });
});
```
