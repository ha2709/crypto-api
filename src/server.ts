import cors from "cors";
import express from "express";
import { PORT } from "./config";
import cryptoRoutes from "./routes/crypto.routes";

const app = express();

app.use(cors());
app.use(express.json());
 

app.use("/crypto", cryptoRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
