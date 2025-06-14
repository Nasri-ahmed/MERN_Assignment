import express from "express";
import tvRoutes from "./routes/tv.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/tvshows", tvRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
