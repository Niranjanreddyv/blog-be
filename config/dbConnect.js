const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        // console.log("connecting to the databse")

        // connect to database
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.log("Error while connecting database",err)
        
    }
}

module.exports = connectDB;