const express = require('express');

const app = express();

app.use(express.static('public'));

// creating a route

app.get("/home", (req, res, next) => {
   console.log(req.url);
   res.sendFile(__dirname + "/views/home.html");
 });

app.get("/about", (req, res, next) => {
    console.log(req.url);
    res.sendFile(__dirname + "/views/about.html");
  });

app.get("/works", (req, res, next) => {
    console.log(req.url);
    res.sendFile(__dirname + "/views/works.html");
});

app.get("/gallery", (req, res, next) => {
    console.log(req.url);
    res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => console.log("App running on port 3000"));
