const express = require("express");

const app = express();

app.get("/", function (request, response) {
    response.send("hllw");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at arish@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("My name is Arish Anwar and I am learning backend");
});

app.get("/hobbies", function (req, res) {
    res.send("<ul><li>travel</li><li>coffee</li></ul>");
});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});