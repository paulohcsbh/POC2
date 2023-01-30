import { Request, Response } from "express";
import productService from "../services/productService.js";

async function getAllProducts(req: Request, res: Response){
    try{
        const products = await productService.getProducts();
        return res.send(products);
    }catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}
const productController = {
    getAllProducts
}
export default productController;