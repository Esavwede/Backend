


export default function gracefulShutdown( server, db )
{
    server.close(async()=>{

        console.log('App Closed. Closing Database ')
        await db.close()
        process.exit(0) 

    })
}