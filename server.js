var express = require("express");
var app = express();
var PORT = 8080;

 
app.use('/js', express.static('public/js'));    //static routes
app.use('/css', express.static('public/css'));

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
  res.sendFile(process.cwd() + '/views/home.html');
});

app.get('/portfolio', function (req, res) {
  console.log("On the Portfolio page.");
  console.log(`Current directory: ${process.cwd()}`);
  //res.send('Hello World');
  res.sendFile(process.cwd() + '/views/home.html');
});

 
app.listen(PORT, function(){
  console.log("Listening on Port %s", PORT);
});