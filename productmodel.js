import mongoose from "mongoose";


const productschema = mongoose.Schema({
    id:{
        type:String,
        required:[true,"please provide the id"],
        trim:true
    },
    name:{
        type:String,
        required:[true,"please provide the name of the product"],
        unique:true,
        trim:true,
        lowercase:true
    },
    description:{
        type:String,
        required:[true,"please provide the product description"],
        trim:true
    },
    price:{
        type:Number,
        required:[true,"please provide the price"],
        minlength:1,
        maxlength:100
    }
});
 const Product=mongoose.model("Product",productschema);
 export default Product;
