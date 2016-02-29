var express = require("express");
var session = require("express-session");
var app = express();
var PORT =  process.env.PORT || 8080;

app.use(express.static('public'));    //static routes

app.get('/', function (req, res) {                    //Home Page response
  console.log("Hello client user..On the homepage");
  console.log(`Current directory: ${process.cwd()}`);
  //res.send('Hello World');
  res.sendFile(process.cwd() + '/views/home.html');
})

app.get('/blog', function (req, res) {
  console.log("On the blog page.");
  console.log(`Current directory: ${process.cwd()}`);
  //res.send('Hello World');
  res.sendFile(process.cwd() + '/views/blog.html');
});

app.get('/portfolio', function (req, res) {
  console.log("On the Portfolio page.");
  console.log(`Current directory: ${process.cwd()}`);
  //res.send('Hello World');
  res.sendFile(process.cwd() + '/views/my_portfolio.html');
});

 
app.listen(PORT, function(){
  console.log("Listening on Port %s", PORT);
});