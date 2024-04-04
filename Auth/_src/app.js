

import express from "express"
import passport from "./auth/SigninWithGoogle/signinWithGoogle.js" 
import jwt from "jsonwebtoken" 
import { authenticateToken } from "./function/Auth/authToken.js"



const app = express() 


// Middlewares 
app.use( passport.initialize() )
app.use( express.json() )

// Routes 

app.get('/',(req, res)=>{
    res.status(200).json({ message: "home "})
})

app.get('/signin', passport.authenticate('google'))

app.get('/signin/callback', passport.authenticate('google',{ session: false } ), (req, res )=>{
    
    const user = req.user 
    
    const accessToken = jwt.sign( user, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_EXPIRATION }) 
    const refreshToken = jwt.sign( user, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.JWT_REFRESH_EXPIRATION })

    return res.status(200).json({ message: "signin successful", body: { accessToken, refreshToken }})
})

app.get('/dashboard', authenticateToken, (req,res)=>{
    res.status(200).json({ body: { content:" dashboard content "}})
})

app.get('/token',(req,res)=>{

    const token = req.body.refreshToken 

    if( !token ){ return res.status(400).json({ message: "no token"})}

    jwt.verify( token, process.env.JWT_REFRESH_SECRET, (e, decoded)=>{

        if(e){ return res.status(403).json({ message:"invalid refresh token "})}

        const accessToken = jwt.sign( decoded, process.env.JWT_ACCESS_SECRET )
        return res.status(200).json({ message:"successful", body:{ accessToken }})
    })
})



// Port 
const PORT = 3000 

app.listen(PORT,()=>{ 
    console.log(`Application Listening on PORT: ${ PORT }`)
})