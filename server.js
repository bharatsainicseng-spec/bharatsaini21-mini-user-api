// server.js
// Entry point — wires up middleware, routes, and starts the server

const express = require("express");
const logger = require("./middleware/logger");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const buildResponse = require("./utils/response");

const app = express();
const PORT = 3000;

// ─── Built-in Middleware ───────────────────────────────────────────────────────
app.use(express.json()); // Parse JSON request bodies

// ─── Custom Middleware ─────────────────────────────────────────────────────────
app.use(logger); // Log every request

// ─── Routes ───────────────────────────────────────────────────────────────────

// Root
app.get("/", (req, res) => {
  res.status(200).json(buildResponse("Server Running"));
});

// Users API
app.use("/users", usersRouter);

// Login
app.use("/login", authRouter);

// 404 catch-all
app.use((req, res) => {
  res.status(404).json(buildResponse("Route not found"));
});

// ─── Start Server ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
