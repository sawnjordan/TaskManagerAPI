const http = require("http");
const express = require("express");
const port = 5005;

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).json({ msg: "This is first get request" });
});

const server = http.createServer(app);

server.listen(port, (err) => {
  if (!err) {
    console.log(`Server listening to port: ${port}`);
    console.log(
      `Browser http://localhost:${port} OR http://127.0.0.1:${port} to browser the server.`
    );
    console.log(`Press CTRL + C to stop the server.`);
  }
});
