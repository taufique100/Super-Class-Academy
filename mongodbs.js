const { urlencoded } = require("express")

// Inserting data in database
use kart
db.items.insertOne({name: "Samsung 30s", price: 22000, rating:4.5,qty:233, sold:98 })
db.items.insertMany([{name: "Samsung 30s", price: 22000, rating:4.5,qty:233, sold:98 }, {name: "Vivo", price: 26500, rating:4.5,qty:833, sold:98 },{name: "Redme", price: 18000, rating:5.5,qty:1000, sold:980 },{name: "Samsung 30s", price: 22000, rating:4.5,qty:233, sold:98 }, {name: "Vivo", price: 26500, rating:4.5,qty:833, sold:98 },{name: "Redme", price: 18000, rating:5.5,qty:1000, sold:980 }])

//  Searching for mongo db
db.items.find({rating: 4.5}) 
db.items.find({rating: {$gte: 3.5}})  // find object greater than Equal to 3.5

db.items.find({rating: {$gt: 3.5}}) // Equal to

db.items.find({rating:{$gte:3.5}, price:{$gt:4000}}) //show data usig with two parameters.

db.items.find({$or:[{rating:{$gte:3.5}}, {price:{$gt:4000}}]})  //using or operator in finding data.

// Deleting items from mongodb

db.items.deleteOne({price:22000})

db.items.deleteMany({price:22000})   //Delete many items at a time

// Updating data in mongoDB
db.items.updateMany({name:"Vivo"},{$set:{price:5}})
db.items.updateOne({name:"Vivo"},{$set:{price:10}})