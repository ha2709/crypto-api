import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const COINGECKO_API_URL = process.env.COINGECKO_API_URL as string;
