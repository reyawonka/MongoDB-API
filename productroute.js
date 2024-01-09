import express from "express";
import { getAllProduct,postProduct,getSpecificProduct,updateProduct,deleteProduct,postfiftyProduct, priceProduct  } from "../control/routecontroller.js";
const ProductRoute = express.Router();

ProductRoute.route("/").get(getAllProduct);
ProductRoute.route("/").get(priceProduct);

ProductRoute.route("/").post(postProduct);
ProductRoute.route("/").post(postfiftyProduct);

ProductRoute.route("/:id").get(getSpecificProduct);

ProductRoute.route("/:id").put(updateProduct);
ProductRoute.route("/:id").delete(deleteProduct);



export default ProductRoute;