var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {                    //Home Page response
  console.log("Hello client user..On the homepage");
  console.log(`Current directory: ${process.cwd()}`);
  //res.send('Hello World');
  res.sendFile(process.cwd() + '/views/home.html');
})

router.get('/blog', function (req, res) {
  console.log("On the blog page.");
  console.log(`Current directory: ${process.cwd()}`);
  //res.send('Hello World');
  res.sendFile(process.cwd() + '/views/blog.html');
});

router.get('/portfolio', function (req, res) {
  console.log("On the Portfolio page.");
  console.log(`Current directory: ${process.cwd()}`);
  //res.send('Hello World');
  res.sendFile(process.cwd() + '/views/my_portfolio.html');
});


router.get("*", function(req,res){
  res.sendFile(process.cwd() + "/public/views/index.html");
})

router.get('/', function (req, res) {
  res.sendFile(process.cwd() + "/public/views/index.html");
});

module.exports = router;
