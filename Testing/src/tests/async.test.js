
const fetchData = require('../functions/fetchData/fetchData') 


describe('A test for asynchronous function ',()=>{

    it(' should wait for the async function and return "data" ',async()=>{
        const data = await fetchData()
        expect( data ).toBe('data') 
    })
})