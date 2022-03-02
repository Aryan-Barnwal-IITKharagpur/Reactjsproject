const express = require('express');
const route = express.Router();
const { hashSync, compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
var passport = require('passport');
const mongoose = require("mongoose")
const User = require('../models/auth');
route.get("/", function (req, res) {
  res.send("okk");
});
route.post("/authenticate", function (req, res) {
  User.findOne({ user_id: req.body.user_id }).then(user => {

    if (!user) {
      return res.send({
        success: false,
        message: "could not find the user."
      })
    }
    if (!compareSync(req.body.password, user.password)) {
      return res.send({
        success: false,
        message: "Incorrect password."
      })
    }
    const payload = {
      user_id: user.user_id,
      password: user.password
    }
    const secretOrPrivateKey = "hcuwehcw78";
    const token = jwt.sign(payload, secretOrPrivateKey, { expiresIn: "1d" });
    return res.send({
      success: true,
      message: "logged in successfully!!",
      token: "Bearer " + token
    })
  })
  // console.log(req.body);
  // res.send("123455");
  // console.log(req.body);
  // const details = {
  //   user_id: req.body.user_id,
  //   password:req.body.password,
  //   company_name: req.body.company_name,
  //   email_id: req.body.email_id,
  // }
  // User.find({ user_id: details.user_id }, (err, foundUser) => {
  //   console.log("foundUser[foundUser.length-1].password-->"+foundUser);
  //   console.log("details.password-->"+details.password);
  //   if (foundUser[foundUser.length-1].password === details.password)
  //     res.send("welcome")
  //   else
  //     res.send("wrong password")
  // })
})
route.post("/save", function (req, res) {
  console.log(req.body);
  //  {
  //   user_id: req.body.user_id,
  //   pass: req.body.pass,
  //   company_name: req.body.company_name,
  //   email_id: req.body.email_id,0.
  // }


  const user = new User({
    user_id: req.body.user_id,
    email_id: req.body.email_id,
    password: hashSync(req.body.password, 10),
    company_name: req.body.company_name,
    username: req.body.user_id
  });
  user.save().then(() => res.send("Saved"));;
});
route.post("/change_password", async function (req, res) {
  console.log(req.body);
  await User.updateOne({ user_d: req.body.user_id }, { password: req.body.password })
  // const user = new User(req.body);
  //  user.save().then(() => res.send("Saved"));;
});
module.exports = route

