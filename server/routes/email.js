const express=require('express');
const route=express.Router();
"use strict";
const nodemailer = require("nodemailer");
route.get("/", function (req, res) {
    res.send("okk");
  });
route.get("/send",function(req,res){
   
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {

        const testAccount={
            user:"induge.1@outlook.com",
            pass:"Indulge@1"
           
        }
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
    //   let testAccount = await nodemailer.createTestAccount();
    // let transporter = nodemailer.createTransport(transport[, defaults])
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });
    
      // send mail with defined transport object
    //   let info = await transporter.sendMail({
    //     from: testAccount.user, // sender address
    //     to: "ashtripathi124@gmail.com", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    //   });
    
    //   console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
    //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    
    main().catch(console.error);
 })
  module.exports=route