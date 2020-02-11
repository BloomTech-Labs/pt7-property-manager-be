const port = process.env.PORT || 4000;
const server = require("./api/server");

server.listen(port, () => {
  console.log(`\n === Server listening on port ${port} === \n`);
});
