import express from "express";
import { fetchCryptoPrice } from "../controllers/crypto.controller";

const router = express.Router();

 

router.get("/price/:cryptoId", fetchCryptoPrice);

export default router;
