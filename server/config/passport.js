var passport=require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
  var  ExtractJwt = require('passport-jwt').ExtractJwt;
  const dotenv = require('dotenv');
  dotenv.config();
var User=require("../models/auth")

module.exports=function(passport){
    let params={};
    console.log(process.env.SECRETKEY);
    // params.secretOrKey=process.env.SECRETKEY;
    params.secretOrKey="hcuwehcw78";
    
    params.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();

    passport.use(new JwtStrategy(params, function(jwt_payload, done) {
        User.findOne({user_id: jwt_payload.user_id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
}



// var opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = 'secret';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
// passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     User.findOne({id: jwt_payload.sub}, function(err, user) {
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);
//             // or you could create a new account
//         }
//     });
// }));