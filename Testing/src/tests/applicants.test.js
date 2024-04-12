

const getEligibleApplicants = require('../functions/SupportFund/eligibility') 
const applicants = require('./samples/supportFund/applicants') 

let eligibleApplicants = null 

beforeAll(()=>{
    eligibleApplicants = getEligibleApplicants( applicants ) 
})


describe(" Applicant Eligibility Tracker Tests ",()=>{

    it(" returns eligible Applicants with age >= 18 ",()=>{

        for( const eligibleApplicant of eligibleApplicants )
        {
            console.log( eligibleApplicant.age ) 
            expect( eligibleApplicant.age ).toBeGreaterThanOrEqual( 18 ) 
        }
    })


    it(" returns eligible applicants with nationality === 'African' ",()=>{

        for( const eligibleApplicant of eligibleApplicants )
        {
            expect( eligibleApplicant.nationality ).toBe('African') 
        }
    })


    it(" returns eligible applicants with income <=50000 ",()=>{

        for( const eligibleApplicant of eligibleApplicants )
        {
            expect( eligibleApplicant.income ).toBeLessThanOrEqual( 50000 ) 
        }
    })

}) 