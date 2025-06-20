import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/book.route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

dbConnect();

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
