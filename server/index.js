const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const LocalStrategy = require("passport-local");
const methodOverride = require("method-override");
// Models
const Auth = require("./models/auth");
const DataInfJnf = require("./models/data_inf_jnf")

mongoose.connect("mongodb+srv://admin:pdr2tPwMBQ40jcen@cluster0.ztdvu.mongodb.net/Indulge?retryWrites=true&w=majority", (err) => {
    if (err) console.log(err);
    else console.log("connected");
});

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
app.listen(3000, function () {
    console.log("running");
});

