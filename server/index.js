const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const favicon = require("serve-favicon");
const axios = require("axios");

const googleOauthRouter = require("./authentication-media-router/google-route.js");
const facebookOauthRouter = require("./authentication-media-router/facebook-route.js");
const linkedinOauthRouter = require("./authentication-media-router/linkedin-route.js");
const twitterOauthRouter = require("./authentication-media-router/twitter-route.js");

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

app.use("/first/media", googleOauthRouter);
app.use("/second/media", facebookOauthRouter);
app.use("/third/media", linkedinOauthRouter);
app.use("/fourth/media", twitterOauthRouter);

app.get("/", (req, res) => {
  res.send(" ready ! openeed URL Server");
});

setTimeout(() => {
  app.listen(PORT, () => {
    console.log(`server running on port : ${PORT} succesfully`);
  });
}, 2200);

// Resources

/* IMPLEMENTATION OUATH 2.0 GUIDE
 
   Resource_1 : Implementing OAuth 2.0 for Secure Authentication in Web Applications.
     
   Link 1 : https://www.linkedin.com/pulse/implementing-oauth-20-secure-authentication-web-applications-h6ynf/

 */
