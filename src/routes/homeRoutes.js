let homeRouter = require("express").Router();
const path = require("path");
let authVerification = require("../middlewares/authVerification");
let postHome = require("../controllers/homePostController");
homeRouter.use(authVerification);
homeRouter.post("/", postHome);

(module.exports = homeRouter), path;
