// routes/auth.js
// Handles POST /login with hardcoded credential check

const express = require("express");
const router = express.Router();
const buildResponse = require("../utils/response");

// Hardcoded credentials
const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "1234";

// POST /login
router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Validate required fields
  if (!email || !password) {
    return res.status(400).json(buildResponse("All fields required"));
  }

  // Check credentials
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return res.status(200).json(buildResponse("Login Success"));
  }

  return res.status(401).json(buildResponse("Invalid Credentials"));
});

module.exports = router;
