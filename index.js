const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
const toolsRoutes = require("./routes/tools.route");
const errorHandler = require("./middleware/errorHandler");
const { connectToServer } = require("./utils/dbConnect");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

connectToServer((err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } else {
    console.log(err);
  }
});

app.use("/api/tools", toolsRoutes);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/hero.html");
});

app.all("*", (req, res) => {
  res.send("no route found");
});

app.use(errorHandler);
