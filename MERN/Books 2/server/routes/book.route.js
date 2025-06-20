import { Router } from 'express';
import BookController from '../controllers/book.controller.js';

const router = Router();

router.post('/books/create', BookController.createBook);
router.get('/books', BookController.getAllBooks);
router.get('/books/:id/details', BookController.getOneBook);
router.put('/books/:id/edit', BookController.updateOneBook);
router.delete('/books/:id/destroy', BookController.deleteOneBook);

export default router;