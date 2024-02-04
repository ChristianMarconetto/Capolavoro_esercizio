let { req, res } = require("express");
const path = require("path");
let database = require("../database/database.json");
let authVerification = (req, res, next) => {
  let payload = { email: req.body.email, password: req.body.password };
  for (let i = 0; i < database.length; i++) {
    console.log(
      payload.email == database[i].email &&
        payload.password == database[i].password
    );
    if (
      payload.email == database[i].email &&
      payload.password == database[i].password
    ) {
      next();
    }
  }
  res
    .status(403)
    .sendFile(path.join(__dirname, "../../public/views/forbidden.html"));
};
module.exports = authVerification;
