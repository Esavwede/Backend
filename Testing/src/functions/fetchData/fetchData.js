


function fetchData()
{
   return new Promise((resolve, reject)=>{

    setTimeout(() => {
        resolve('data')
    }, 5000 );
    
   })
}


module.exports = fetchData 