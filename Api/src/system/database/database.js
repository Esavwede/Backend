

import mongoose from "mongoose" 

console.log( process.env.DB_URI ) 

const ConnectionConfig = 
{
    minPoolSize: 10,
    maxPoolSize: 20
}


export default async function connectToDB()
{
    try 
    {
        await mongoose.connect( process.env.DB_URI, ConnectionConfig )
        return mongoose.connection 
    }
    catch(e)
    {
        console.log('INITIAL_DATABASE_CONNECTION_ERROR')
        console.log(e) 
    }
}


mongoose.connection.on('connecting',()=>{
    console.log('Connecting To Database ')
})


mongoose.connection.on('connected',()=>{
    console.log(' Connected To Database ') 
})


mongoose.connection.on('disconnecting',()=>{
    console.log('Database Connection Disconnecting ') 
})

mongoose.connection.on('disconnected',()=>{
    console.log('Database Connection Disconnected ')
})

mongoose.connection.on('close',()=>{
    console.log('Database Connection Closed ') 
})


mongoose.connection.on('error',(e)=>{
    console.log('Database Error ')
    console.log(e) 
})