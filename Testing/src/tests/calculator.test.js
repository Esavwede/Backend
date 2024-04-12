

const add = require('../functions/add.js') 


describe(" Addition Test ",()=>{

    it(" should return the correct sum ",()=>{

        const sum = add(1,1)
        expect( sum ).toBe( 2 ) 
    })


    it(" should return false for non numbers ",()=>{
 
        const sum = add(undefined,null)
        expect(sum).toBeFalsy()
    })

    it(" should return truthy for valid numbers ",()=>{
        const sum = add(10,10)
        expect( sum ).toBeTruthy() 
    })

})