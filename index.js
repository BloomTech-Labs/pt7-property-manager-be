const app = require("./api/server/server");
require("dotenv").config();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`\n === Server listening on port ${port} === \n`);
});
