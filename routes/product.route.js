const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const verifyToken = require("../authJWT/authjwt");

router.post("/add", productController.addProduct);
router.get("/get",productController.getProduct);
router.put('/update', productController.updateProduct);

module.exports = router;