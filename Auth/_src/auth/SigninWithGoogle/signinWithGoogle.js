
import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20" 


passport.use(

    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            scope: ['profile','email']
        },
        (accessToken, refreshToken, profile, done )=>{

            console.log(' User Authenticated ') 
            const user = { id: profile.id } 
            done( null, user ) 
        }
    )   
)


export default passport 