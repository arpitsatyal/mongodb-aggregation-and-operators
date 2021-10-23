// calculates avg value of certain values in the documents
// for each group

// { $avg: <expression>}

// average age for each eyecolor group
db.persons.aggregate([
    {
        $group: {
            _id: '$company.location.country',
            average: { $avg: '$age' }
         }
    }
])