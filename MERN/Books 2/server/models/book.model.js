import { model, Schema } from 'mongoose';

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, "A book's title is required!"],
    minLength: [2, "A book's title must be at least two characters long!"]
  },
  author: {
    type: String,
    required: [true, "An author's name is required!"],
    minLength: [5, "An author's name must be at least five characters long!"]
  },
  pageCount: {
    type: Number,
    required: [true, "A book must have some pages!"]
  },
  available: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Book = model("Book", BookSchema);
export default Book;