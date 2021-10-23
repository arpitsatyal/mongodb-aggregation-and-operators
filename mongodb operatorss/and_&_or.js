//and
//females that love banana
db.persons.find({
    $and: [
        { gender: 'female '},
        { favoriteFruit: 'banana' }
    ]
})

// starts with 26
db.persons.find({
    $and: [
        { age: { $ne: 25 } },
        { age: { $gte: 25 }}
    ]
}).sort({ age: 1})

//or
// people that are active or have eye color blue
db.persons.find({
    $or: [
        { isActive: true },
        { eyeColor: 'blue' }
    ]
})


db.persons.find({
   eyeColor: { $in: ['blue', 'green']}
})