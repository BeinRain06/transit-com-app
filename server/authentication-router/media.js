const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path");
const favicon = require("serve-favicon");

console.log("HERE :", path.join(__dirname, "../", "public", "favicon.ico"));

router.use(favicon(path.join(__dirname, "../", "public", "favicon.ico")));

router.use(cors());

router.get("/", function (req, res) {
  res.send(" reponse Media !");
});

// < -- GOOGLE AUTHENTICATION OAUTH 2.0 -- >

router.get("/google", function (req, res) {
  res.send(" reponse Google !");
});

// < -- FACEBOOK AUTHENTICATION OAUTH 2.0 -- >

router.get("/facebook", function (req, res) {
  res.send(" reponse Facebook !");
});

// < -- TWITTER AUTHENTICATION OAUTH 1.0.a -- >

router.get("/twitter", function (req, res) {
  res.send(" reponse Twitter !");
});

module.exports = router;
