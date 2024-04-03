const verifyToken = require("../authJWT/authjwt");
const productService = require("../services/product.service");

const addProduct = async(req, res) => {
    try{
        const reqBody = req.body;
        const productData = productService.addProducts(reqBody);
        res.status(200).json({
            message:"productAddedSuccessfully",
            data: productData
        })
    }
    catch(err){
        console.log(err);
        return err;
    }
}


const updateProduct = async(req, res) => {
    try{
        const reqBody = req.body;
        const id = req.Params.id;
        console.log(reqBody, id);
        const productData = productService.updateProducts(reqBody, id);
        res.status(200).json({
            message:"productUpdatedSuccessfully",
            data: productData
        })
    }
    catch(err){
        console.log(err);
        return err;
    }
}


const getProduct = async() => {
    try{
        const productData = await productService.getProducts();
       return productData
    }
    catch(err){
        console.log(err);
        return err;
    }
}


module.exports = {addProduct, getProduct, updateProduct}