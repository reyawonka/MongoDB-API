import mongoose, { connect } from "mongoose";
import  dotenv from "dotenv";
dotenv.config();
const connectDb= async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("database connection successful", connect.connection.host,connect.connection.name);
    }catch(err){
        console.log(err);
    }
};

export default connectDb;
