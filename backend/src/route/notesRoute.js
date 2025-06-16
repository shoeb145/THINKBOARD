import express from "express";
import {
  createNote,
  deleteNote,
  getALLNote,
  getNoteById,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getALLNote);
router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
