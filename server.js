var express = require("express");
var path = require("path");

var app = express();
var morgan = require("morgan");

app.use(morgan("dev"));
var publicPath = path.join(__dirname + "/public/");
var indexPath = path.join(__dirname + "/public/index.html");
// var jsPath = path.join(__dirname + "/../js/");
var nodeModulesPath = path.join(__dirname + "/node_modules");

app.use(express.static(publicPath));
app.use(express.static(nodeModulesPath));
// app.use(express.static(jsPath));

// call by sharing, and evaluation strategy - good interview talk!


app.get("/", function (request, response) {
  response.sendFile(indexPath);
});

app.listen(8080, function () {
  console.log("I'm listening to you on port 8080, Jai");
})

// TODO:
// Flesh out modal
// Add search and address functionality
// Create places to visit and timer functionality

// TODO: FRONTEND
// Change frontend to angular states
// Make background: transparent on navbar when map div shows up - use states and ng-class to change?
