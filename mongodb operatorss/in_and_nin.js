// in
// people that are 21 or 22 yrs old
db.persons.find({ age: { $in: [21, 22]}})

//ne
db.persons.find({
    'company.location.country': { $ne: 'Italy'}
})

//nin
// people that are female
db.persons.find({gender: { $nin: ['male'] }})
