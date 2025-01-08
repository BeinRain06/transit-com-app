const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path");
const favicon = require("serve-favicon");
const axios = require("axios");

router.use(favicon(path.join(__dirname, "../", "public", "favicon.ico")));

router.use(cors());

// < -- TWITTER AUTHENTICATION OAUTH 1.0.a -- >

router.get("/", function (req, res) {
  res.send(" reponse Twitter !");
});

router.get("/twitter/callback", function (req, res) {
  res.send(" reponse Twitter callback");
});

module.exports = router;
