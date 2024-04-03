const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName:{
        type: String,
        require: true,
    },
    productType:{
        type: String,
        require: true,
    },
    productPrice:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model("product",productSchema);