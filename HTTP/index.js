const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to Index page");
  } else if (req.url == "/emp") {
    res.write("respone");
    res.end();
  } else {
    res.end("invalid request of the user");
  }
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
