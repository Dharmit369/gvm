const product = require("../models/product.model");


const addProducts = (reqBody) => {
    try{
        const createdProduct = product.create(reqBody);
        return createdProduct;
    }catch(err){
        return err;
    }
}

const getProducts = () => {
    try{
        const productData = product.find();
        return productData;
    }catch(err){
        return err;
    }
}


const updateProducts = (reqBody, id) => {
    try{
        const updatedProduct = product.findOneAndUpdate(
            {id: id},
            {$set: reqBody},
            {new: true}
        );
        return updatedProduct;
    }catch(err){
        return err;
    }
}

module.exports = { addProducts, getProducts, updateProducts}