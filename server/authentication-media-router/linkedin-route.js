const express = require("express");
const router = express.Router();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const favicon = require("serve-favicon");
const axios = require("axios");

dotenv.config({ path: path.join(__dirname, "..", ".env") });

router.use(favicon(path.join(__dirname, "../", "public", "favicon.ico")));

router.use(cors());

/* AUTHENTICATION OAUTH 2.0 */

const LINKEDIN_ACCESS_TOKEN_URL = process.env.LINKEDIN_ACCESS_TOKEN_URL;
const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const LINKEDIN_CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;

// < -- GOOGLE AUTHENTICATION OAUTH 2.0 -- >

// router test path
router.get("/", function (req, res) {
  res.send("Hey LinkedIn route page Login !");
});

// GET the token response
router.get("/linkedin/callback", async function (req, res) {
  const data = {
    client_id: LINKEDIN_CLIENT_ID,
    redirect_uri: "http://localhost:8000/third/media/linkedin/callback",
  };

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const grant_type = "client_credentials";

  const access_token_data = await axios.post(
    `https://www.linkedin.com/oauth/v2/accessToken?grant_type=client_credentials&client_id=${LINKEDIN_CLIENT_ID}&client_secret=${LINKEDIN_CLIENT_SECRET}`,

    {
      headers: headers,
    }
  );

  /*  const access_token_data = await axios.post(LINKEDIN_ACCESS_TOKEN_URL, {
    headers: headers,
    params: {
      grant_type: grant_type,
      client_id: LINKEDIN_CLIENT_ID,
      client_secret: LINKEDIN_CLIENT_SECRET,
    },
  }); */

  console.log("access_token_data :", access_token_data);

  /* const access_token_data = await axios({
    method: "post",
    url: LINKEDIN_ACCESS_TOKEN_URL,
    headers: headers,
    params: {
      client_id: LINKEDIN_CLIENT_ID,
      client_secret: LINKEDIN_CLIENT_SECRET,
      grant_type: "client_credentials",
    },
    data: data,
  }).then((res) => res.data);

  console.log("access_token_data :", access_token_data); */

  res.json({ success: true, data: "pending" });

  /* -- REALLY NEXT STEP */

  // follow google-route.js comments inside the callback route
});

module.exports = router;

// RESOURCES DOCUMENTATION

/* 
resource_1 : Implementing OAuth 2.0 for Secure Authentication in Web Applications.
  Link : "https://www.linkedin.com/pulse/implementing-oauth-20-secure-authentication-web-applications-h6ynf/"

resource_2 : linkedin ouath 2.0 implementation
  Link : "https://learn.microsoft.com/en-us/linkedin/shared/authentication/authentication"

resource_3 : LinkedIn OAuth 2.0 social login guide
  Link: "https://techdocs.akamai.com/identity-cloud/docs/the-linkedin-oauth-20-social-login-configuration-guide"
 */

/* http://localhost:8000/third/media/linkedin/callback */

/* *<--PROBLEMS with LinkedIn -->**
   issue : ^^This application is not allowed to create application tokens^^

   Link : https://stackoverflow.com/questions/50626514/linkedin-this-application-is-not-allowed-to-create-application-tokens
*/
