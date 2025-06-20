import Book from "../models/book.model.js";

const bookController = {
  createBook: async (req, res) => {
    try {
      const newBook = await Book.create(req.body);
      res.status(201).json({ success: true, data: newBook });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  },
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json({ success: true, data: books });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  },
  getOneBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json({ success: false, message: "Not found" });
      res.status(200).json({ success: true, data: book });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  },
  updateOneBook: async (req, res) => {
    try {
      const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!updated) return res.status(404).json({ success: false, message: "Not found" });
      res.status(200).json({ success: true, data: updated });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  },
  deleteOneBook: async (req, res) => {
    try {
      const deleted = await Book.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
      res.status(200).json({ success: true, data: deleted });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  }
};
export default bookController;
