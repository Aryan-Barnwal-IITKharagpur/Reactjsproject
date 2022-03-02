const express=require('express');
const route=express.Router();
const jwt=require('jsonwebtoken');
var passport=require('passport');
const mongoose = require("mongoose")
const GraduationYear=require('../models/graduation_year');
route.post("/save", function (req, res) {
 const graduationYear=new GraduationYear(req.body)
 graduationYear.save().then(() => res.send("Saved"));
  });

  module.exports = route;