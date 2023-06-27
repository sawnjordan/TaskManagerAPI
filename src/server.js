const http = require("http");
const express = require("express");
const app = require("./config/app");
const PORT = 5005;

const server = http.createServer(app);

server.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server listening to PORT: ${PORT}`);
    console.log(
      `Browser http://localhost:${PORT} OR http://127.0.0.1:${PORT} to browser the server.`
    );
    console.log(`Press CTRL + C to stop the server.`);
  } else {
    console.log(`Error connection to PORT: ${PORT}`);
  }
});
