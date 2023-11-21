const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://vyshnavkumara2021:ws7QBc8OSWh4tCeX@cluster0.0kzwjrp.mongodb.net/vyshnavkumar-carzs' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose