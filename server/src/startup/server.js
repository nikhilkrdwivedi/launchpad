import express from "express";
import cors from "cors";
import httpResponseMessages from "../constants/httpResponseMessages.js";
import authenticationRouter from "../routes/authentications.js";
// import todoRouter from "../routes/todos";
import morgan from "morgan";
import jwt from 'jsonwebtoken'
import environment from "../configurations/environment.js";
import { AUTH_CONSTANTS } from "../constants/authentications.js";
export function createServer() {
  const app = express();
  let corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(morgan("dev"));

  // Route endpoints
//   app.use("/api/v1/todos/", todoRouter);
  app.use("/api/v1/authentications/", authenticationRouter);

  app.get("/", (request, response) => {
    
    return response.status(200).json({
      success: true,
      message: httpResponseMessages.SERVER_UP_AND_RUNNING,
      data: new Date(),
    });
  });
  return app;
}

export default createServer;
