import { Router } from "express";
import productController from "../controllers/productController.js";

const productRoute = Router();

productRoute.get("/products", productController.getAllProducts);

export default productRoute;