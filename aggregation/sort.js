//sort
// sorts input docs by certain field

// { $sort: { field1: -1 or 1 }}

// { $sort: { score: -1 }}
// { $sort: { age: 1, country: 1}}

db.persons.aggregate([
    { $sort: { name: 1 }}
])

db.persons.aggregate([
    { $sort: { age: -1, gender: -1}}
])

//sort with other stages
//result = apple,banana,strawberry in alphabetical order
db.persons.aggregate([
    { $group: { _id: '$favoriteFruit' }},
    { $sort: { _id: 1 }}
])

db.persons.aggregate([
    { 
        $group: { _id: { eye: '$eyeColor',
        fruit: '$favoriteFruit'}}
    },
    {
        $sort: { "_id.eye": 1, "_id.fruit": -1 }
    }
])

db.persons.aggregate([ 
    {
        $match: { eyeColor: { $ne: 'brown' }}
    },
    { 
        $group: { _id: { eye: '$eyeColor',
        fruit: '$favoriteFruit'}}
    },
    {
        $sort: { "_id.eye": 1, "_id.fruit": -1 }
    }
])