let registerRouter = require("express").Router();
const path = require("path");
let registerPostController = require("../controllers/registerPostController");
let registerGetController = require("../controllers/registerGetController");
registerRouter
  .route("/")
  .get(registerGetController)
  .post(registerPostController);

(module.exports = registerRouter), path;
