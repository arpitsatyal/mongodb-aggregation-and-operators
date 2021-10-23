// task -- match all documents with gender female and group them with their name and eyeColor 

db.persons.aggregate([
    { 
        $match: { gender: 'female' }
    },
    {
        $group: { _id: { name: '$name', eyeColor: '$eyeColor' }}
    }
])

//changing order of the stages --- empty result! order matters 

db.persons.aggregate([
    {
        $group: { _id: { name: '$name', eyeColor: '$eyeColor' }}
    },
    { 
        $match: { gender: 'female' }
    }
])
