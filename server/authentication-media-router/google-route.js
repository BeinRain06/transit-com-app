const express = require("express");
const router = express.Router();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const favicon = require("serve-favicon");
const axios = require("axios");

/* CODE_SOURCE_EXAMPLE :
https://permify.co/post/oauth-20-implementation-nodejs-expressjs/ */

dotenv.config({ path: path.join(__dirname, "..", ".env") });

router.use(favicon(path.join(__dirname, "../", "public", "favicon.ico")));

router.use(cors());

/* AUTHENTICATION OAUTH 2.0 */

const GOOGLE_OAUTH_URL = process.env.GOOGLE_OAUTH_URL;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_CALLBACK_URL =
  "http%3A//localhost:8000/first/media/google/callback";
const GOOGLE_OAUTH_SCOPES = [
  "https%3A//www.googleapis.com/auth/userinfo.email",
  "https%3A//www.googleapis.com/auth/userinfo.profile",
];

const GOOGLE_ACCESS_TOKEN_URL = process.env.GOOGLE_ACCESS_TOKEN_URL;

// < -- GOOGLE AUTHENTICATION OAUTH 2.0 -- >

// redirect to google consent screen page
router.get("/", function (req, res) {
  const state = "some_state";
  const scopes = GOOGLE_OAUTH_SCOPES.join(" ");

  const GOOGLE_OAUTH_CONSENT_SCREEN_URL = `${GOOGLE_OAUTH_URL}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_CALLBACK_URL}&access_type=offline&response_type=code&state=${state}&scope=${scopes}`;

  res.redirect(GOOGLE_OAUTH_CONSENT_SCREEN_URL);
});

// GET the token response
router.get("/google/callback", async function (req, res) {
  /* <--authorization code--> */
  const { code } = req.query;

  const data = {
    code,
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: "http://localhost:8000/first/media/google/callback",
    grant_type: "authorization_code",
  };

  console.log("authorization_code: ", data);

  /* <-- exchange authorization code for access_token and id_token -->  */

  const access_token_data = await axios({
    method: "post",
    url: GOOGLE_ACCESS_TOKEN_URL,
    data: data,
  }).then((res) => res.data);

  /* <-- verify and extract information in the GOOGLE ID TOKEN -->  */

  const { id_token } = access_token_data;

  console.log("id_token: ", id_token);

  const token_info_response = await axios.get(
    `${process.env.GOOGLE_TOKEN_INFO_URL}?id_token=${id_token}`
  );

  console.log("token_info_response: ", token_info_response);

  res
    .status(token_info_response.status)
    .json({ success: "token_info fetch successfully !" });

  /* -- REALLY NEXT STEP */

  //   1. --> build the SQL User Database Model in another file (user.js)

  //   2. HERE --> find if the user already exist in the database and allow an APP(transit-app-com) authentication using JWT Token to send a <token> for **user session**

  //   3. HERE -->  if the user does not exist create the user with the right SQL command and apply the step 2

  //  4. HERE -->  send back the <token> , userinfo.email, userinfo.id in a **COOKIE** to your front-end app

  /*  res.json({ sucess: true, data: token_info_response }); */
});

module.exports = router;
