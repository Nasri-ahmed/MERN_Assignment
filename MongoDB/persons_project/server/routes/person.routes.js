import { Router } from "express";
import PersonController from "../controllers/person.controller.js";

const router = Router();

router.post("/persons/create", PersonController.createPerson);

export default router;
