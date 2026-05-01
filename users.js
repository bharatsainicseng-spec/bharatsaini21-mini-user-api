
const express = require("express");
const router = express.Router();
const buildResponse = require("../utils/response");

let users = [];
let nextId = 1;


router.get("/", (req, res) => {
  return res.status(200).json(
    buildResponse("Users fetched successfully", { users })
  );
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json(buildResponse("User not found"));
  }

  return res.status(200).json(buildResponse("User fetched successfully", { user }));
});


router.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res
      .status(400)
      .json(buildResponse("Name and email are required"));
  }


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
