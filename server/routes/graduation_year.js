const express=require('express');
const route=express.Router();
const jwt=require('jsonwebtoken');
var passport=require('passport');
const mongoose = require("mongoose")
const GraduationYear=require('../models/graduation_year');
route.post("/", function (req, res) {
    res.send("okk");
  });

  module.exports = route;