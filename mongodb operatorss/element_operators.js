// $exists -- checks if the field exists

db.persons.find({ name: {$exists: true }})

//type -- checks type
db.persons.find({ index: { $type: 'int' }})

//eq -- checks if value matches
db.persons.find({ index: { $eq: 23 }})

//regex
db.persons.find({ name: { $regex: /Aur/, options: 'i'} })