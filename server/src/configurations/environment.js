/* eslint-disable no-undef */
import * as dotenv from "dotenv";
dotenv.config();

// Export the enviroment object
export const environment = {
  PORT: process.env.PORT || 3020,
  mongoURI: process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/todo-demo",
  mongoOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  SERVER: process.env.SERVER || `http://localhost:3020`,
  JWT_SECRET: process.env.JWT_SECRET || "JWT_SECRET123321JWT_SECRET",
  ISSUER_URL: process.env.ISSUER_URL || "https://launchpad-nikhilkrdwivedi.vercel.app",
};

export default environment;