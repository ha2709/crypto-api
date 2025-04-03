import { Request, Response } from "express";
import { getCryptoPrice } from "../services/crypto.service";

/**
 * Controller to handle GET request for crypto price
 */
export const fetchCryptoPrice = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cryptoId } = req.params;
        const priceData = await getCryptoPrice(cryptoId);
        res.json(priceData);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};
