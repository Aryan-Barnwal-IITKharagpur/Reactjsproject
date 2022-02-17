const express=require('express');
const route=express.Router();
const {User}=require('../models/auth');
route.get("/", function (req, res) {
    res.send("okk");
  });
route.post("/save", function (req, res) {
  console.log(req.body);

   // {
  //   user_id: req.body.user_id,
  //   pass: req.body.pass,
  //   company_name: req.body.company_name,
  //   email_id: req.body.email_id,
  // }

    const user = new User(req.body);
    user.save().then(() => res.send(user));
  });
  module.exports=route

 