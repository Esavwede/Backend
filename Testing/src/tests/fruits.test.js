

var fruits = ['apple','pear','orange','watermelon']


describe("Fruit Feature test ",()=>{


    it(' should return an array of fruits containing "Apple" ',()=>{

        expect( fruits ).toContain('apple')
    })
})