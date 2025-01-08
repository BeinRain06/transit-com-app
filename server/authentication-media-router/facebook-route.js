const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path");
const favicon = require("serve-favicon");
const axios = require("axios");

router.use(favicon(path.join(__dirname, "../", "public", "favicon.ico")));

router.use(cors());

// < -- FACEBOOK AUTHENTICATION OAUTH 2.0 -- >

router.get("/", function (req, res) {
  res.send(" reponse Facebook !");
});

router.get("/facebook/callback", function (req, res) {
  res.send(" reponse Facebook callback");
});

module.exports = router;
