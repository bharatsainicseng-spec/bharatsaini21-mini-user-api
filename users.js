// routes/users.js
// Handles all /users routes: GET all, GET by ID, POST, DELETE

const express = require("express");
const router = express.Router();
const buildResponse = require("../utils/response");

// In-memory user store
let users = [];
let nextId = 1;

// GET /users — return all users
router.get("/", (req, res) => {
  return res.status(200).json(
    buildResponse("Users fetched successfully", { users })
  );
});

// GET /users/:id — return a specific user (Bonus)
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json(buildResponse("User not found"));
  }

  return res.status(200).json(buildResponse("User fetched successfully", { user }));
});

// POST /users — add a new user
router.post("/", (req, res) => {
  const { name, email } = req.body;

  // Validate required fields
  if (!name || !email) {
    return res
      .status(400)
      .json(buildResponse("Name and email are required"));
  }

  // Check for duplicate email
  const duplicate = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
  if (duplicate) {
    return res
      .status(409)
      .json(buildResponse("A user with this email already exists"));
  }

  const newUser = { id: nextId++, name, email };
  users.push(newUser);

  return res
    .status(201)
    .json(buildResponse("User created successfully", { user: newUser }));
});

// DELETE /users/:id — delete a user by ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json(buildResponse("User not found"));
  }

  const deleted = users.splice(index, 1)[0];

  return res
    .status(200)
    .json(buildResponse("User deleted successfully", { user: deleted }));
});

module.exports = router;
