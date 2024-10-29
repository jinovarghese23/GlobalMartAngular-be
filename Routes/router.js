const express=require('express');
const router=new express.Router()

const productController=require('../Controllers/productController');


// defining path get all product
router.get('/all-products',productController.getAllProductsController);

router.get('/get-product/:id',productController.getProductDetailsByIdController)

module.exports=router
