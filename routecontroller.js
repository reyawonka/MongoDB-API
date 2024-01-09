import Product from "../model/productmodel.js";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

// Read/All
export const getAllProduct= async (req,res)=>{
    res.status(200).json({message:"Welcome to Product get request"})
};

// Get Specific
export const getSpecificProduct= async (req,res)=>{
    const studbyID = await Student.findById(req.params.id);
    if (!studbyID) {
        res.status(404);
        throw new Error ("Student not found");
    }
    res.status(200).json(studbyID)
};


// Create
export const postProduct= async (req,res)=>{
    console.log("post student is:" ,req.body);
    const {id,name,description,price}=req.body;
    if(!id || !name||!description||!price){
        res.status(400)
        throw new error('Please provide all fields');
    }
    const product = await Product.create({id,name,description,price})
};
  
//update
export const updateProduct= async (req,res)=>{
    const prodbyID = await Product.findByID(req.params.id);
    if (!prodbyID) {
        res.status(404);
        throw new Error ("Product not found");
    }
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json({message:"Welcome to Product update request"})
};

// delete
export const deleteProduct = async (req,res)=>{
    res.status(200).json({message:"Welcome to Product delete specific request"})
};

// Create, this one i want to add 50 to each price inputed
export const postfiftyProduct = async (req, res) => {
    console.log("post student is:" ,req.body);
    const {id, name, description, price} = req.body;
    if (!id || !name || !description || !price) {
      res.status(400);
      throw new Error('Please provide all fields');
    }
    const product = await Product.create({
      id,
      name,
      description,
      price: price + 50
    });
    await product.save();
    res.status(201).json(product);
  };
  

// discount, i want a 10 precent discount on all the prices ??
export const priceProduct = async (req, res) => {
    const { id, name, description, price } = req.body;
    const product = await Product.create({ id, name, description, price });
    await product.save();
    res.status(201).json(product);
  };