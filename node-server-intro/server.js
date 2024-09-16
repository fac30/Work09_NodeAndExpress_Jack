const express = require("express");

const server = express();

server.get("/", (request, response, next) => {
  console.log(request.method + " " + request.url);
  console.log("hellooo");
  next();
});

server.get("/", (request, response) => {
  response.send("<h1>Hello</h1>");
});

server.get("/json", (request, response) => {
  response.send({ message: "Hello" });
});

server.get("/redirects", (request, response) => {
  response.redirect("/");
});

server.use((request, response) => {
  response.status(404).send("<h1>Not found</h1>");
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
