const port = process.env.PORT || 4000;
const server = require("./api/server");
require("dotenv").config();

server.listen(port, () => {
  console.log(`\n === Server listening on port ${port} === \n`);
});
