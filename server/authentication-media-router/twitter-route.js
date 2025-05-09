const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const favicon = require("serve-favicon");
const axios = require("axios");

dotenv.config({ path: path.join(__dirname, "..", ".env") });

router.use(favicon(path.join(__dirname, "../", "public", "favicon.ico")));

router.use(cors());

// < -- TWITTER AUTHENTICATION OAUTH 1.0.a -- >

const twitter_oauth_url = "https://x.com/i/oauth2/authorize";

const client_id = process.env.TWITTER_CLIENT_ID;

const twitter_callback_url =
  "http://localhost:8000/fourth/media/twitter/callback";

//follow he step to

router.get("/", function (req, res) {
  const state = "some_state";
  const scopes = "offline.access";

  const TWITTER_OAUTH_CONSENT_SCREEN_URL = `${twitter_oauth_url}?response_type=code&client_id=${client_id}&redirect_uri=${twitter_callback_url}&scope=${scopes}&state=${state}&code_challenge=challengeone&code_challenge_method=plain`;

  res.redirect(TWITTER_OAUTH_CONSENT_SCREEN_URL);
});

router.get("/twitter/callback", function (req, res) {
  res.send(" reponse Twitter callback, Ouath 2.0 Success!");
});

function randomStr(len, arr) {
  let ans = "";
  for (let i = len; i > 0; i--) {
    ans += arr[Math.floor(Math.random() * arr.length)];
  }
  console.log(ans);
}

module.exports = router;

// RESOURCES DOCUMENTATION

/* 

resource_1 : twitter ouath 2.0 Documentation
  Link : "https://docs.x.com/resources/fundamentals/authentication/oauth-2-0/authorization-code"
  Link : "https://docs.x.com/resources/fundamentals/authentication/oauth-2-0/user-access-token"

resource_2 : twitter ouath 1.0a Documentation
  Link : "https://docs.x.com/resources/fundamentals/authentication/oauth-1-0a/api-key-and-secret"

resource_3 : APP develop portal to config new twitter app
  Link : "https://developer.x.com/en/portal/petition/essential/basic-info"

resource_4 : write code X-api
  Link: "https://github.com/xdevplatform"
 */

// RESOURCES DOCUMENTATION HELPERS

/*
 resource_1 : base64 32bytes encoding 
    Link : "https://stackoverflow.com/questions/29744691/generate-random-characters-in-my-case"

  resource_2 : oauth_signature ^^creation^^ --> 
                 well look into : **Creating the signature base string** section & ^^understand^^ 
    Link : "https://docs.x.com/resources/fundamentals/authentication/oauth-1-0a/creating-a-signature"
 */
