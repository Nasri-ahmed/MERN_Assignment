import Book from '../models/book.model.js';

const BookController = {
  createBook: async (req, res) => {
    try {
      const newBook = await Book.create(req.body);
      res.status(201).json({ success: true, message: "✅ Book created successfully.", data: newBook });
    } catch (error) {
      res.status(400).json({ success: false, message: "❌ Failed to create book. Please check the provided data.", error });
    }
  },

  getAllBooks: async (req, res) => {
    try {
      const allBooks = await Book.find();
      res.status(200).json({ success: true, message: "✅ Books retrieved successfully.", allBookData: allBooks });
    } catch (error) {
      res.status(400).json({ success: false, message: "❌ Unable to retrieve books.", error });
    }
  },

  getOneBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) throw new Error("Book not found.");
      res.status(200).json({ success: true, message: "✅ Book retrieved successfully.", data: book });
    } catch (error) {
      res.status(404).json({ success: false, message: "❌ Book not found.", error });
    }
  },

  updateOneBook: async (req, res) => {
    try {
      const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (!updated) throw new Error("Book not found.");
      res.status(200).json({ success: true, message: "✅ Book updated successfully.", data: updated });
    } catch (error) {
      res.status(400).json({ success: false, message: "❌ Failed to update book.", error });
    }
  },

  deleteOneBook: async (req, res) => {
    try {
      const deleted = await Book.findByIdAndDelete(req.params.id);
      if (!deleted) throw new Error("Book not found.");
      res.status(200).json({ success: true, message: "✅ Book deleted successfully.", data: deleted });
    } catch (error) {
      res.status(400).json({ success: false, message: "❌ Failed to delete book.", error });
    }
  }
};

export default BookController;
