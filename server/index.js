const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const favicon = require("serve-favicon");
const axios = require("axios");
const oauthRouter = require("./authentication-router/media");

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.json());

var corOptions = {
  origin: `http://localhost:${PORT}`,
  optionsSuccessStatus: 200,
};

app.use(cors(corOptions));

app.use("/media/auth", oauthRouter);

app.get("/", (req, res) => {
  res.send(" ready ! openeed URL Server");
});

setTimeout(() => {
  app.listen(PORT, () => {
    console.log(`server running on port : ${PORT} succesfully`);
  });
}, 2200);
