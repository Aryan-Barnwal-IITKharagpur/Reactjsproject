var mongoose = require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose")

var UserSchema = new mongoose.Schema({
    user_id: String,
    email_id: String,
    password: String,
    company_name: String,
})

UserSchema.plugin(passportLocalMongoose)
const User=new mongoose.model("User", UserSchema);
module.exports = User;
