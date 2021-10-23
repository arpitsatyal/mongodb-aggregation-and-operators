// acucumulators are only used with the group stage
// accumulators maintain state for each group of the document
// { $accumulatorOperator: expression}

// { $sum: "$quantity" }
// { $avg: "$age" }

//sum
db.persons.aggregate([
    {
        $group: { _id: '$age',
        count: { $sum: 1 } 
    },
    }
])

// total represents no of occurences of tags
db.persons.aggregate([
    {
        $unwind: '$tags'
    }, {
        $group: {
            _id: '$tags',
            count: { $sum: 1 }
        }
    }
])