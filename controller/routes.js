var express = require('express');
var router = express.Router();

router.get("*", function(req,res){
  res.sendFile(process.cwd() + "/public/index.html");
})

router.get('/', function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

router.post('/contact', function (req, res) {
  var mailOptions, smtpTransporter;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  smtpTransporter = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
          user: "me@gmail.com",
          pass: "application-specific-password"
      }
  });

  //Mail options
  mailOptions = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
      to: 'markawai.dev@gmail.com',
      subject: 'Mark Awai Portfolio Contact Form from Heroku',
      text: req.body.message
  };
  smtpTransporter.sendMail(mailOptions, function (error, response) {
      //Email not sent
      if (error) {
        return console.log(error);
          // res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
      }
      //Yay!! Email sent
      else {
          console.log('Message %s sent: %s', info.messageId, info.response);
          // res.render('contact', { title: 'Raging Flame Laboratory - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
      }
  });
});


module.exports = router;
// router.get('/', function (req, res) {                    //Home Page response
//   console.log("Hello client user..On the homepage");
//   console.log(`Current directory: ${process.cwd()}`);
//   //res.send('Hello World');
//   res.sendFile(process.cwd() + '/views/home.html');
// })

// router.get('/blog', function (req, res) {
//   console.log("On the blog page.");
//   console.log(`Current directory: ${process.cwd()}`);
//   //res.send('Hello World');
//   res.sendFile(process.cwd() + '/views/blog.html');
// });
//
// router.get('/portfolio', function (req, res) {
//   console.log("On the Portfolio page.");
//   console.log(`Current directory: ${process.cwd()}`);
//   //res.send('Hello World');
//   res.sendFile(process.cwd() + '/views/my_portfolio.html');
// });
