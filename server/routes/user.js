const express=require('express');
const route=express.Router();
const mongoose = require("mongoose")
const User=require('../models/auth');
route.get("/", function (req, res) {
    res.send("okk");
  });
  route.get("/authenticate", function (req, res) {
    // console.log(req.body);
    // res.send("123455");
    const details = {
      user_id: req.body.user_id,
      password:req.body.password,
      company_name: req.body.company_name,
      email_id: req.body.email_id,
    }
    User.find({ user_id: details.user_id }, (err, foundUser) => {
      console.log("foundUser[foundUser.length-1].password-->"+foundUser[foundUser.length-1].password);
      console.log("details.password-->"+details.password);
      if (foundUser[foundUser.length-1].password === details.password)
        res.send("welcome")
      else
        res.send("wrong password")
    })
  })
route.post("/save", function (req, res) {
  console.log(req.body);
  //  {
  //   user_id: req.body.user_id,
  //   pass: req.body.pass,
  //   company_name: req.body.company_name,
  //   email_id: req.body.email_id,0.
  // }
    const user = new User(req.body);
     user.save().then(() => res.send("Saved"));;
  });
  route.post("/change_password", async function (req, res) {
    console.log(req.body);
    await User.updateOne({user_d:req.body.user_id},{password:req.body.password})
      // const user = new User(req.body);
      //  user.save().then(() => res.send("Saved"));;
    });
  module.exports=route

 