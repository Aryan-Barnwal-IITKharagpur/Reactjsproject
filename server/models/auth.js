var mongoose = require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose")

var AuthSchema = new mongoose.Schema({
    user_id: String,
    email_id: String,
    password: String,
    company_name: String,
})

AuthSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("Auth", AuthSchema)
