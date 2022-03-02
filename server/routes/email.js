const express=require('express');
const route=express.Router();
var passport=require('passport');
var jwt=require('jsonwebtoken');
"use strict";
const nodemailer = require("nodemailer");
// route.get("/", function (req, res) {
//     res.send("okk");
//   });
route.post("/send_invite",function(req,res){
  console.log(req.body);
  const testAccount={
    user:process.env.EMAIL_ID,
    pass:process.env.PASSWORD
}
if(req.body.user===testAccount.user&&req.body.pass===testAccount.pass)
        {
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        // port: 587,
        port:465,
        secure: true, 
        service:'gmail',
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        }
      });
      // transporter.verify(function (error, success) {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log("Server is ready to take our messages");
      //   }
      // });
      const r=Math.floor(1000*Math.random());
      const s=Math.floor(1000*Math.random());
      const user_id=`${req.body.company_name}#${r}`;
      let pass=`pass${s}`;
      for(var i=0;i<5;i++)
      pass+=String.fromCharCode(65+26*Math.random());
      const subject=` Invitation to register for ${req.body.invitation_type} season-2021-22 , IIT ISM Dhanbad `;
      const html =`<div>HR Manager,<br>${req.body.company_name}.<br>
      It is indeed our pleasure that your esteemed organization is participating in the internship/placement season at IIT (ISM) Dhanbad.
      Kindly visit our website indulge.ac.in and log in with the following credentials:<br>
      Username:${user_id}<br>
      Password:${pass}<br>
      Thank you for your kind cooperation.</div>`
      const mailOptions={
        from:"CDC IIT ISM Dhanbad",
        to:req.body.email_id,
        subject:subject,
        // text:"Working good . Can be done better. ok done",
        html:html
      }
      
      transporter.sendMail(mailOptions,function(err,data){
          if(err)
          {
            res.send(err);
          }
          else{
            const response={
              user_id:user_id,
              pass:pass
            }
           res.send(response);
          }
      })
    }
    else
    {
      res.send("INVALID REQUEST")
    }
    
 })

 route.post("/send_pdf",function(req,res){
    
  const testAccount={
    user:"indulge1239@gmail.com",
    pass:"Indulge@12#"
   
}
// attachments:[{
//   filename: 'exp4.pdf',
//  //  path: 'https://drive.google.com/file/d/1HT_YcREpHGwy6Ku3qFKFnqugkPLiuGqd/view?usp=sharing'.
//  //http:www.africau.edu/images/default/sample.pdf
//  path:'http://www.africau.edu/images/default/sample.pdf'
// }]
let transporter = nodemailer.createTransport({
service:'gmail',
auth: {
  user: testAccount.user, // generated ethereal user
  pass: testAccount.pass, // generated ethereal password
}
});
const mailOptions={
from:testAccount.user,
to:"ashutosh.19je0195@ee.iitism.ac.in",
subject:"CDC IIT ISM DHANBAD",
text:"Working good . Can be done better. ok done",
attachment:{
     // use URL as an attachment
    filename: 'exp4.pdf',
    path: 'https://drive.google.com/file/d/1HT_YcREpHGwy6Ku3qFKFnqugkPLiuGqd/view?usp=sharing'

}

}
transporter.sendMail(mailOptions,function(err,data){
  if(err)
  {
    res.send(err);
  }
  else{
   res.send("success");
  }
})


 });
  module.exports=route