import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  REFRSH_TOKEN_SECRET: process.env.REFRSH_TOKEN_SECRET,
  ACCESS_TOKEN_SCREAT: process.env.ACCESS_TOKEN_SCREAT,
};


export default config;