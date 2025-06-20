import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // ✅ 1. Import CORS
import dbConnect from "./config/mongoose.config.js";
import bookRoutes from "./routes/book.routes.js";

dotenv.config();

const app = express();

app.use(cors()); 
app.use(express.json());

dbConnect();

app.use("/api", bookRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
