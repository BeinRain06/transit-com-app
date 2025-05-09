const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path");
const favicon = require("serve-favicon");
const axios = require("axios");

router.use(favicon(path.join(__dirname, "../", "public", "favicon.ico")));

router.use(cors());

const FACEBOOK_OAUTH_URL = process.env.FACEBOOK_OAUTH_URL;
const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET;

const FACEBOOK_CALLBACK_URL =
  "http%3A//localhost:8000/second/media/facebook/callback";

const FACEBOOK_LOGIN_CONFIG_ID = process.env.FACEBOOK_LOGIN_CONFIG_ID;

const FACEBOOK_ACCESS_TOKEN_URL = process.env.FACEBOOK_ACCESS_TOKEN_URL;
// < -- FACEBOOK AUTHENTICATION OAUTH 2.0 -- >

router.get("/", function (req, res) {
  const state = "{day=bright,mth=jan}";

  const FACEBOOK_CONSENT_SCREEN_URL = `${FACEBOOK_OAUTH_URL}?client_id=${FACEBOOK_CLIENT_ID}&redirect_uri=${FACEBOOK_CALLBACK_URL}&state=${state}&config_id=${FACEBOOK_LOGIN_CONFIG_ID}`;

  res.redirect(FACEBOOK_CONSENT_SCREEN_URL);
});

router.get("/facebook/callback", async function (req, res) {
  /* <--authorization code--> */
  const { code } = req.query;

  console.log("authorization code :", code);

  const access_token_data = await axios.get(FACEBOOK_ACCESS_TOKEN_URL, {
    params: {
      client_id: FACEBOOK_CLIENT_ID,
      redirect_uri: "http://localhost:8000/second/media/facebook/callback",
      client_secret: FACEBOOK_CLIENT_SECRET,
      code: code,
    },
  });

  console.log("access_token_data :", access_token_data);

  res.json({
    success: true,
    process: "pending",
  });

  // (At this point the user is Login & authenicated)

  // ---> NEXT STEP

  // resource : https://developers.facebook.com/docs/facebook-login/guides/%20access-tokens/debugging#sizes

  /* 
    1. check if the user already exist in your SQL database
       (if not you need to create that User in Database )
    2. send back the access_token_data to the client side in a cookie;
    3. each time the user make a request check if the token it still valid or not (if not error.code =  190)
    4. token VALID --> proceed, NOT VALID ---> prompt to login page 
   */
});

module.exports = router;

// RESOURCES DOCUMENTATION

/* 
resource_1 : Facebook login Documentation
  Link : "https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow/?locale=en_US"

resource_2 : APP dashboard to config new facebook app
  Link : "https://developers.facebook.com/apps/?show_reminder=true&locale=en_US"

resource_3 : Working with Facebook login from localhost
  Link: "https://stackoverflow.com/questions/39800216/working-with-facebook-login-from-localhost"
 */

// RESOURCES DOCUMENTATION ERROR FIXED

/*
 resource_1 : "It looks like this app isn't available" Facebook App Login Error
 
  Link : "https://stackoverflow.com/questions/75601813/it-looks-like-this-app-isnt-available-facebook-app-login-error"
 */
