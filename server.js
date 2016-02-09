var express = require("express");
var app = express();
var PORT = 8080;

 
app.get('/', function (req, res) {
  console.log("On the homepage..Hello client user");
  res.send('Hello World');
})
 
app.listen(PORT);