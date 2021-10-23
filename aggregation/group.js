//all documents where size of the tags array is greater than 3
db.persons.aggregate([
    {
        $match: {
            tags: { $size: 3 }
        }
    }
])

//group
// groups input documents by certain experssions

// { $group: { _id: <expression>, 
{/* <field1>: <accumulator1>: <expression1> }}} */ }


db.persons.aggregate([
    { $group: { _id: "$age" } }
])
// _id is a madnatory field
// group by age, a field in the db

// { $group: {_id: { age: "$age"  }}}
// here age is a placeholder and $age is the input from the document

db.persons.aggregate([
    { $group: { _id: "$company.location.address" } }
])

db.persons.aggregate([
    { $group: { _id: { fuck: "$company.location.address" } } }
])

// age eti vako ko yo eye color chha
db.persons.aggregate([
    { $group: { _id: { age: '$age', eyeColor: '$eyeColor' } } }
])

// eye color yo vako ko fav fruit --9 results because 
// there are 3 possible eyeColor and favFruit
db.persons.aggregate([
    { $group: { _id: { eyeColor: '$eyeColor', favFruit: '$favoriteFruit' } } }
]) 

// more fields, more combinations, more documents
// below will have more than 50 documents
db.persons.aggregate([
    { $group: { _id: { eyeColor: '$eyeColor', favFruit: '$favoriteFruit', age: '$age' } } }
]) 

