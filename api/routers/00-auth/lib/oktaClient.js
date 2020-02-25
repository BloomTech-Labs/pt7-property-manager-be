const okta = require("@okta/okta-sdk-nodejs");

const client = new okta.Client({
  orgUrl: "https://{dev-600562.okta.com}",
  token: "{00LGWkCOoKWi0IAUnn9Trcbn1XP1YEYAZBEVeoch5h}"
});

module.exports = client;
