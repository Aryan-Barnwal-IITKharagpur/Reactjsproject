var mongoose = require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose")

var GraduationYearSchema = new mongoose.Schema({
    job: String,
    intern_type1: String,
    intern_type2: String,
    intern_type3: String,
})

const GraduationYear=new mongoose.model("GraduationYear", GraduationYearSchema);
module.exports = GraduationYear;
