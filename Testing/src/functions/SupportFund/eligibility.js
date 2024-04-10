


function getEligibleApplicants( applicants )
{

    var eligibleApplicants = [] 

        for( applicant of applicants )
        {
            const {age, income, nationality } = applicant 

            if( age >= 18  && income <= 50000  && nationality === 'African'  )
            {
                eligibleApplicants.push( applicant ) 
            }
        }

    return eligibleApplicants 
}


module.exports = getEligibleApplicants 