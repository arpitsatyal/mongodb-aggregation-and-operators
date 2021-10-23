// count
// counts the no of input documents

// { $count: "<title>"}
// {$count: "countries"}

//client side count
db.persons.aggregate([
    { $count: 'allDocumentsCount' }
]) //1000

db.persons.aggregate([]).toArray().length //1000

// server side count
db.persons.aggregate([{ $count: 'total'}])

// count counts documents passed from the group stage
// hence we get the result {'countriesCount: 4'}

db.persons.aggregate([
    {
        $group: {_id: '$company.location.country' }
    }, {
        $count: 'countriesCount'
    }
])

db.persons.aggregate([
    {
        $group: {_id: {eyeColor: '$eyeColor', gender: '$gender'} }
    }, {
        $count: 'ageandgender'
    }
])

db.persons.aggregate([
    {
        $match: { age: { $gte: 25 }}
    },
    {
        $group: {_id: {eyeColor: '$eyeColor', gender: '$gender'} }
    }, {
        $count: 'ageandgender'
    }
])