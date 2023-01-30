import { Request, Response } from "express";
import purchaseService from "../services/purchaseService.js";

async function getAllPurchases(req: Request, res: Response){
    try{
        const purchases = await purchaseService.getPurchases();
        return res.send(purchases);
    }catch(err){
        console.log(err);
        return res.sendStatus(500);
    }
}
const purchaseController = {
    getAllPurchases
}
export default purchaseController;