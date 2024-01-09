import express from "express";
import dotenv from "dotenv";
import ProductRoute from "./route/productroute.js";
import { errorHandler } from "./middleware/error.js";
import connectDb from "./connection/db.js";

const app = express();

connectDb();
app.use(express.json());
app.use("/api/product",ProductRoute);
app.use(errorHandler);

dotenv.config();
const port =process.env.PORT||5000;



app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});

