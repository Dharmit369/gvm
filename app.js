const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route");
const productRoute = require("./routes/product.route");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/gvm")
.then(()=>{
    console.log("database connected successfully");
})
.catch(()=>{
    console.log("Unable to connect database");
})

app.use("/user",userRoute);
app.use("/product", productRoute);

app.listen(3000, ()=>{
    console.log("server started on port 3000");
})

// module.exports = app;;