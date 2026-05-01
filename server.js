
const express = require("express");
const logger = require("./middleware/logger");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const buildResponse = require("./utils/response");

const app = express();
const PORT = 3000;


app.use(express.json()); // Parse JSON request bodies


app.use(logger); // Log every request

app.get("/", (req, res) => {
  res.status(200).json(buildResponse("Server Running"));
});

app.use("/users", usersRouter);

app.use("/login", authRouter);


app.use((req, res) => {
  res.status(404).json(buildResponse("Route not found"));
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
