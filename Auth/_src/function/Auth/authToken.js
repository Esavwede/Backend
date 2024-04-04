
import jwt from "jsonwebtoken" 


export function authenticateToken(req, res, next)
{
    try 
    {

        const authHeader = req.headers['authorization'] 
        const token = authHeader && authHeader.split(' ')[1] 

        console.log( authHeader ) 

        if( !token )
        { 
            console.log('No token') 
            return res.status(400).json({ message: " unauthorized "})
        }

        jwt.verify( token, process.env.JWT_ACCESS_SECRET, (e, decoded )=>{

            if(e){ 
                console.log(" Incorrect Token ") 
                return res.status(403).json({ message:" forbidden " })}

            req.user = decoded 
            return next() 
        })
    }
    catch(e)
    {
        console.log('Error Occured While Authenticating Token ')
        console.log(e) 
        res.status(500).json({ message: "error occured while authenticating JWT token "})
    }
}

