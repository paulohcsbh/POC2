import express from "express";
import clientRouter from "./routes/clientRoute.js";
import productRoute from "./routes/productRoute.js";
import purchaseRoute from "./routes/purchaseRoute.js";
var app = express();
app.use(express.json());
app.use(clientRouter);
app.use(productRoute);
app.use(purchaseRoute);
app.listen(4000, function () {
    console.log("App running in port 4000.");
});
