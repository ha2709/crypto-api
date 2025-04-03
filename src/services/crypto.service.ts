import axios from "axios";
import { COINGECKO_API_URL } from "../config";

/**
 * Fetch the current price of a specified cryptocurrency.
 * @param cryptoId - The ID of the cryptocurrency (e.g., "bitcoin")
 * @returns Price data from CoinGecko
 */
export const getCryptoPrice = async (cryptoId: string): Promise<{ asset: string; price: number }> => {
    try {
        const response = await axios.get(`${COINGECKO_API_URL}/simple/price`, {
            params: { ids: cryptoId, vs_currencies: "usd" },
        });

        if (!response.data[cryptoId]) {
            throw new Error("Cryptocurrency not found in the top 100");
        }

        return {
            asset: cryptoId,
            price: response.data[cryptoId].usd,
        };
    } catch (error) {
        console.error("Error fetching price:", error);
        throw new Error("Failed to fetch cryptocurrency price");
    }
};
