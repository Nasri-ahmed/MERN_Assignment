import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/person.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
dbConnect();

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
