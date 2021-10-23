// aggregation on array fields

// splits each document with specified array to several documents
// one document per array

// { $unwind: <array_reference_expression }
//array fields will be replaced with strings

// 3556 docs in result
db.persons.aggregate([
   { $unwind: "$tags" },
   { $count: 'total' }
])

//unwind with project
db.persons.aggregate([
    {
        $unwind: '$tags'
    },
    {
        $project: { _id: 0, name: 1, gender:  1, tags: 1 }
    }
])

// unwind with group
db.persons.aggregate([
    {
        $unwind: '$tags'
    },
    {
       $group: { _id: '$tags' }
    }
])

db.persons.aggregate([
    {
        $unwind: '$tags'
    },
    {
       $group: { _id: '$tags' }
    }
])