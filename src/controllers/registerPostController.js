const path = require("path");
let jsonDb = require("../database/database.json");
const fs = require("fs");
const { validationResult } = require("express-validator");
let { req, res } = require("express");
let registerController = (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const existingUser = jsonDb.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );
  if (existingUser) {
    return res.status(400).json({ message: "L'email è già registrata." });
  }
  jsonDb.push({ email, password });
  const dbPath = path.join(__dirname, "../database/database.json");
  fs.writeFileSync(dbPath, JSON.stringify(jsonDb, null, 2), "utf-8");

  res.send("Registrazione completata, torna alla pagina di accesso");
};
module.exports = registerController;
