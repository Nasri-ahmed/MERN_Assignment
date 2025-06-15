import express from 'express';
import mongoose from 'mongoose';
import bookRoutes from './routes/book.routes.js';

const app = express();
const PORT = 8000;

app.use(express.json()); 


mongoose.connect('mongodb://127.0.0.1:27017/books_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('MongoDB connection error:', err));


app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
