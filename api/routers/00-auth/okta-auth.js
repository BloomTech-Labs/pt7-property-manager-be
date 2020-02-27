const session = require("express-session");
const { ExpressOIDC } = require("@okta/oidc-middleware");
require("dotenv").config();

// session support is required to use ExpressOIDC
app.use(
  session({
    secret: "This should be secure",
    resave: true,
    saveUninitialized: false
  })
);

const oidc = new ExpressOIDC({
  issuer: "https://${dev-600562.okta.com}/oauth2/default",
  client_id: "clientId",
  client_secret: "clientSecret",
  redirect_uri: "http://localhost:4000/authorization-code/callback",
  scope: "openid profile"
});

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);
