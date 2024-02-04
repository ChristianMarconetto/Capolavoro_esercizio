const path = require("path");
let jwt = require("jsonwebtoken");
let { req, res } = require("express");
let postHome = (req, res) => {
  let { email, password } = req.body;
  let token = jwt.sign;
  res.sendFile(path.join(__dirname, "../../public/views/home.html")); //noprob
};
module.exports = postHome;
