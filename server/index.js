const express = require("express");
var cors = require('cors')

const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const PDFDocument = require('pdfkit');
const fs = require('fs');
// const mongoose = require("mongoose");

app.use(cors())
const cookieParser = require("cookie-parser");
const LocalStrategy = require("passport-local");
const methodOverride = require("method-override");
// Models
const Auth = require("./models/auth");
const DataInfJnf = require("./models/form")

const connectDB=require('./database/connection');
const dotenv = require('dotenv');
dotenv.config();
connectDB();

// mongoose.connect("mongodb+srv://admin:pdr2tPwMBQ40jcen@cluster0.ztdvu.mongodb.net/Indulge?retryWrites=true&w=majority", (err) => {
//     if (err) console.log(err);
//     else console.log("connected");
// });

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride("_method"));
app.use(cookieParser("secret"));
// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Merners Rocks !!",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(Auth.authenticate()))
passport.serializeUser(Auth.serializeUser());
passport.deserializeUser(Auth.deserializeUser());

// Routes
app.use('/user',require('./routes/user'));
app.use('/form',require('./routes/form'));
app.use('/email',require('./routes/email'));
app.use('/pdf',require('./routes/pdf'));

app.get("/", function (req, res) {
    res.send("okk");
  });
//   function pdfff(){


    // let pdfDoc = new PDFDocument;
    // pdfDoc.pipe(fs.createWriteStream('SampleDocument.pdf'));
    // pdfDoc.text("My Sample PDF Document");
    // pdfDoc.end();
    // }
    // pdfff();


app.listen(3000, function () {
    console.log("running");

});

