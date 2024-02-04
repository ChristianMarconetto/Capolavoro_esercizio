const express = require("express");
const bodyParser = require("body-parser");
const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
let ws = require("express-ws")(server);
let loginRouter = require("./src/routes/loginRoutes");
let homeRouter = require("./src/routes/homeRoutes");
let registerRouter = require("./src/routes/registerRoutes");
server.use(express.static("public"));
server.use("/", loginRouter);
server.use("/home", homeRouter);
server.use("/register", registerRouter);

server.listen(3000);
