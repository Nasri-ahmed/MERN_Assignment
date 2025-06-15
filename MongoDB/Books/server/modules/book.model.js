import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [2, 'Title must be at least 2 characters'],
        maxlength: [255, 'Title must be less than 256 characters'],
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        minlength: [5, 'Author name must be at least 5 characters'],
        maxlength: [255, 'Author name must be less than 256 characters'],
    },
    pages: {
        type: Number,
        required: [true, 'Pages number is required'],
        min: [1, 'Pages must be at least 1'],
    },
    isAvailable: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export default mongoose.model('Book', bookSchema);
