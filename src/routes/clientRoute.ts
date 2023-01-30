import { Router } from "express";
import clientController from "../controllers/clientController.js";
import validateSchemaMiddleware from "../middlewares/validateSchema.js";
import { clientSchema } from "../schemas/clientSchema.js";

const clientRouter = Router();

clientRouter.get("/clients", clientController.getAllClients);
clientRouter.get("/clients/:clientId", clientController.getOneClient);
clientRouter.post("/clients", validateSchemaMiddleware(clientSchema), clientController.createNewClient)
export default clientRouter;