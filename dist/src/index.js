import express from "express";
import clientRouter from "./routes/clientRoute.js";
import productRoute from "./routes/productRoute.js";
import purchaseRoute from "./routes/purchaseRoute.js";
import dotenv from "dotenv";
dotenv.config();
var app = express();
app.use(express.json());
app.use(clientRouter);
app.use(productRoute);
app.use(purchaseRoute);
var port = process.env.PORT || 4000;
app.listen(4000, function () {
    console.log("App running in port ".concat(port, "."));
});
