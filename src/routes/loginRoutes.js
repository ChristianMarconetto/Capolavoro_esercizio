let loginRouter = require("express").Router();
const path = require("path");
let loginController = require("../controllers/loginController");
loginRouter.route("/").get(loginController);

(module.exports = loginRouter), path;
