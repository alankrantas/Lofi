const express = require("express");
const history = require("connect-history-api-fallback");

const app = express();

app.use("/", express.static("dist"));  // file server for the frontend
app.use(history());  // fallback

const host = process.argv[2] || "localhost";
const port = process.argv[3] || 8080;

app.listen(
    port,
    host,
    () => console.log(`Server running on http://${host == "0.0.0.0" ? "localhost" : host}:${port} ...`)
);