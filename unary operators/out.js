// allows us to write result of the aggregation to a new collection

{ $out: '<output-collection-name' }

db.persons.aggregate([
   { 
       $match: { age: { $gte: 25 }}
   },
   {
       $group: {
           _id: { eyeKoColor: '$eyeColor' }
       }
   },
   { $out: 'outCollection' }
])