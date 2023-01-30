import { Router } from "express";
import userController from "../controllers/userController.js";
var userRouter = Router();
userRouter.get("/users", userController.getAllUsers);
export default userRouter;
