// atleast one nested document in the Array must match
// [ALL] the conditions. order dont matter

// { 'array_field': { $elemMatch: {'cond1', 'cond2' }}}

// sample document
// {
//     "_id" : ObjectId("61744b0029c3f7096cb85d12"),
//     "name" : "Mike",
//     "friends" : [ 
//         {
//             "name" : "Lora",
//             "age" : 23,
//             "registered" : true
//         }, 
//         {
//             "name" : "Bob",
//             "age" : 25,
//             "registered" : false
//         }, 
//         {
//             "name" : "Steve",
//             "age" : 27
//         }
//     ]
// }

db.persons.find({
    friends: {
        $elemMatch: { age: 27, registered: true }
    }
}) 
// ---> returns nothing because all the fields did not match!