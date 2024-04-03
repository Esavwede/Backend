
import jwt from "jsonwebtoken" 

export default function authenticateToken(req, res, next)
{
        const authHeader = req.headers['authorization']
        
        const token = authHeader && authHeader.split(' ')[1] 

        if( !token )
        {
            return res.status(400).json({message: 'unauthorized'})
        }

        jwt.verify( token, process.env.JWT_SECRET_KEY, (err, decoded )=>{
            if(err)
            {
                return res.status(403).json({ message:'forbidden'})
            }

            req.user = decoded 
            next() 
        })
}