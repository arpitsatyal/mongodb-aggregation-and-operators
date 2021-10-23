// work on documents rather than groups
// mostly go with $project stage

//$type
//$or $and
//$Lt $gt 
// $multiply

// type -- returns type of the field's value
// { $type: exp }
// { $type: '$age' }

db.persons.aggregate([
    {
        $project: {
            name: 1,
            _id: 0,
            eyeKoColor: { $type: '$eyeColor' },
            ageType: { $type: '$age' },
            tagsType: { $type: '$tags' },
            companyKoType: { $type: '$company' }
        }
    }
])