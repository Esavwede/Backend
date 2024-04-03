
import jwt from "jsonwebtoken" 

export function generateRefreshToken(user)
{
    return jwt.sign( user, process.env.JWT_SECRET , { expiresIn: JWT_REFRESH_TOKEN_EXPIRATION })
}