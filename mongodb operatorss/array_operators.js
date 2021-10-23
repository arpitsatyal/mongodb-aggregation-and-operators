// query by array indexes

db.persons.find({'tags.1': 'ad' })

//all operator
// array containing all specific values -- independent of order

db.persons.find({
    tags: { $all: ['ad', 'eu'] }
})

//size operator
db.persons.find({ tags: { $size: 4 }})