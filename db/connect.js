const mongoose = require("mongoose");
require('dotenv').config()
// uri = "mongodb+srv://anjalisainia78:mymongodbdata@cluster0.gydkw3g.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0";
// uri= "mongodb://127.0.0.1:27017"



const connectDB = (uri) => {
    console.log("connect mongodb")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}; 

// const connectDB = () => {
//     console.log("connect mongodb")
//     mongoose.connect(`${process.env.DB_URl}/${process.env.DB_NAME}`)

// }; 

module.exports = connectDB;