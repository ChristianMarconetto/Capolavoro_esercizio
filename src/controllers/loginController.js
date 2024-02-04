const path = require("path");
let { req, res } = require("express");
let loginController = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/views/index.html"));
};
module.exports = loginController;
