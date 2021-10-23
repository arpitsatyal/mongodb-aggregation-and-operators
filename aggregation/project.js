// includes, excludes or adds new fields

// { $project: { field1: <1>, field2: <0>, 
// newField: expression }}

// 1 means field will be included, 0 excluded
// expression renames field to the new field

// we take documents and project them to smaller docs

db.persons.aggregate([
    { $project: { name: 1, "company.title": 1 }}
])

//like select(), excludes the two fields
db.persons.aggregate([
    { $project: { eyeColor: 0, age: 0 }}
])

//includes _id (by default), name and newAge (renamed)
db.persons.aggregate([
    { $project: { name: 1, newAge: '$age' }}
])

// exclude _id
db.persons.aggregate([
    { $project: {_id: 0, isActive: 1, name: 1, gender: 1 }}
])


//restructure using project
db.persons.aggregate([
    { $project: { _id: 0, name: 1, info: {
        eyes: '$eyeColor',
        fruit: '$favoriteFruit',
        country: '$company.location.country'
    } }}
])

