const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
const { dbConnect } = require("./utils/dbConnect");
const toolsRoutes = require("./routes/tools.route");
const errorHandler = require("./middleware/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

dbConnect();
app.use("/api/tools", toolsRoutes);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/hero.html");
});

app.all("*", (req, res) => {
  res.send("no route found");
});

app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.message, error.name);
  server.close(() => {
    process.exit(1);
  });
});
