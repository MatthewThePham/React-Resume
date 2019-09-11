const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");


// async..await is not allowed in global scope, must use a wrapper
router.post('/send', async (req, res) => {
    
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // ENV variable configed from Heroku
      pass: process.env.PASSWORD // ENV variable configed from Heroku
    } 
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.EMAIL, // sender address
    to: process.env.EMAIL, // list of receivers
    subject: `Nodemailer, Name: ${req.body.name}, Email: ${req.body.email}`, // Subject line
    text: req.body.message, // plain text body
    //html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);

})


module.exports = router;