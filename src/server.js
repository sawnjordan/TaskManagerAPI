const http = require("http");
const app = require("./config/app");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = 5005;

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    server.listen(PORT);
  })
  .then(() => {
    console.log(`Server listening to PORT:${PORT} and connected to DataBase`);
    console.log(`Browser: http://localhost:${PORT} `);
    console.log(`Press CTRL + C to STOP the server`);
  })
  .catch((error) => {
    console.log(error);
  });
// server.listen(PORT, (err) => {
//   if (!err) {
//     console.log(`Server listening to PORT: ${PORT}`);
//     console.log(
//       `Browser http://localhost:${PORT} OR http://127.0.0.1:${PORT} to browser the server.`
//     );
//     console.log(`Press CTRL + C to stop the server.`);
//   } else {
//     console.log(`Error connection to PORT: ${PORT}`);
//   }
// });
