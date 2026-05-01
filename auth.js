
const express = require("express");
const router = express.Router();
const buildResponse = require("../utils/response");

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "1234";


router.post("/", (req, res) => {
  const { email, password } = req.body;


  if (!email || !password) {
    return res.status(400).json(buildResponse("All fields required"));
  }

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return res.status(200).json(buildResponse("Login Success"));
  }

  return res.status(401).json(buildResponse("Invalid Credentials"));
});

module.exports = router;
