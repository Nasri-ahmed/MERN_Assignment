import { Router } from "express";
import bookController from "../controllers/book.controller.js";

const router = Router();

router.post("/books/create", bookController.createBook);
router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getOneBook);
router.put("/books/:id", bookController.updateOneBook);
router.delete("/books/:id", bookController.deleteOneBook);

export default router;
