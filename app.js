const express =require("express");
const app = express();

const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/" , (req , res)=>{
    res.send("hi am live");
} );

//  middleware or to set router
app.use("/api/products" , products_routes);

const start = async () => {
    try{
        await connectDB(process.env.DB_URl);
        app.listen(PORT, ()=>{
            console.log(`${PORT} yes i am connected`);
        });
    }catch (error){
        console.log(error)
    }
};

start();


// app.listen(1010, (req ,res)=>{
//     console.log("runing..");
// })