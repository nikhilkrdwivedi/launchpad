import { Router } from "express";
import controller from "../controllers/authentications.js";
import validator from "../middlewares/requestValidators/authentications.js";
const authenticationRouter = Router();

authenticationRouter.post(
  "/register",
  validator.registerValidation,
  controller.register
);
authenticationRouter.post(
  "/login",
  validator.loginValidation,
  controller.login
);
authenticationRouter.get("/logout", controller.logout);
authenticationRouter.get("/validate-token", controller.validateToken);

export default authenticationRouter;