import { Router } from "express";
import purchaseController from "../controllers/purchaseController.js";
var purchaseRoute = Router();
purchaseRoute.get("/purchases", purchaseController.getAllPurchases);
export default purchaseRoute;
