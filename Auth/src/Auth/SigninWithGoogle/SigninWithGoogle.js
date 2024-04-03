
import passport from "passport"
import jwt from "jsonwebtoken" 

import { Strategy as GoogleStrategy } from "passport-google-oauth20" 


const GoogleSigninStrategry = new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        passReqToCallback: true 
    },
    (req, accessToken, refreshToken, profile, done )=>
    {
        console.log(" User Authenticated ")
        done(null, req.user ) 
    }   
)
 
passport.use( GoogleSigninStrategry ) 

export default passport 
