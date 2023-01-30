import { Router } from "express";
import purchaseController from "../controllers/purchaseController.js";

const purchaseRoute = Router();

purchaseRoute.get("/purchases", purchaseController.getAllPurchases);

export default purchaseRoute;