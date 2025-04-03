import express, { Request, Response } from "express";
import cryptoRoutes from "./crypto.routes";

const router = express.Router();

// Root route - Welcome message
router.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the Crypto Price API!");
});

// Use crypto-related routes
router.use("/crypto", cryptoRoutes);

export default router;
