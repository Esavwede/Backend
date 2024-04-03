import passport from "./Auth/SigninWithGoogle/SigninWithGoogle.js" 

import express from "express"
import session from "express-session"
import cookieParser from "cookie-parser"
import authenticateToken from "./middleware/Auth/authenticateToken.js"
import jwt from "jsonwebtoken" 

const app = express() 



app.use( session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
}))

app.use( cookieParser() ) 
app.use( passport.initialize() )

// Routes 

app.get('/',(req, res)=>{
    res.send('Home') 
})

app.get('/signin', passport.authenticate('google',{scope: ['profile','email']}))

app.get('/signin/callback', passport.authenticate('google',{ session: false ,failureRedirect: '/signin' }),(req, res)=>{

    const accessToken = jwt.sign( req.user , process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_EXPIRATION })
    const refreshToken = jwt.sign( req.user, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.JWT_REFRESH_EXPIRATION })

    res.status(200).json({ accessToken, refreshToken})
})


app.get('/token',(req, res)=>{
    
    const refreshToken = req.body.refreshToken

    if( !refreshToken )
    { return res.status(400).json({ message:"Bad Request"})}


    jwt.verify( refreshToken, process.env.JWT_REFRESH_SECRET,(err, user )=>{
        if(err){ return res.status(403).json({ message:"Invalid refresh token"})}

        const token = jwt.sign(user, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_EXPIRATION })
        
    })
})



app.get('/dashboard', authenticateToken, (req, res )=>{
    const auth = req.cookies.authorization
    console.log( auth ) 
    console.log('finished')
    res.send("dashboard") 
})

 
const PORT = 3000 

app.listen( PORT, ()=>{
    console.log("Application Listening on Port " + PORT )
})
