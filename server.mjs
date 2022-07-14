"use strict";
import http from "http";

const cl = console.log;
const { PORT = 8000 } = process.env;
const server = http.createServer((req, res) => {
  const guest = ['Mary', 'Joe']

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(guest));
});

server.listen(PORT, () => {
  cl("Listening on port, ", PORT);
});

