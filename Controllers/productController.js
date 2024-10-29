const products=require('../Models/productModel');

// get all products
exports.getAllProductsController=async(req,res)=>{
    console.log("Inside get all product controller");
    
    try{
        const allProducts=await products.find();
        res.status(200).json(allProducts)
    }
    catch(err){
        res.status(401).json(err);
    }
}

// get product details by id
exports.getProductDetailsByIdController=async(req,res)=>{
    const {id}=req.params;
    console.log("Inside getProductDetailsByIdController",id);
    try {
        const product=await products.findOne({id});
        res.status(200).json(product);
    } catch (err) {
        res.status(401).json(err)
    }
}