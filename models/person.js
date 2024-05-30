const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

//initializes command's values and database's link
const url = process.env.DB_URL;
console.log("connecting to", url)

//connect, then log if failed
mongoose.connect(url)
    .then(result => {
        console.log('connected to DataBase')
    })
    .catch(error => {
        console.log("Connection to database failed:", error.message)
    })

//set Schema and set schema
const personSchema = new mongoose.Schema({
   "name": String,
   "number": String
})

//set toJson
personSchema.set('toJSON', {
    transform: (document, returned) => {
        returned.id = returned._id.toString();
        delete returned._id;
        delete returned.__v;
    }
})

module.exports = mongoose.model('Person', personSchema)