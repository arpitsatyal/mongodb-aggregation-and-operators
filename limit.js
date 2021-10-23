// { $limit: 100 }

db.persons.aggregate([
    {
        $limit: 100
    },
    {
        $match: { age: { $gte: 30 }}
    },
    {
        $group: {
            _id: { country: "$company.location.country"}
        }
    }
])