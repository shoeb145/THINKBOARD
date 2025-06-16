import Note from "../models/Note.js";

export async function getALLNote(req, res) {
  try {
    const note = await Note.find().sort({ createdAt: -1 }); // new one first
    res.status(200).json(note);
  } catch (error) {
    console.error("error in getallnote", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      res.status(400).json({ message: "all feild are required" });
    }
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();

    res.status(201).json(savedNote);
  } catch (error) {
    console.error("error in  createingnote", error);
    res.status(500).json({ message: "internal server error" });
  }
}
export async function getNoteById(req, res) {
  try {
    const getNote = await Note.findById(req.params.id);
    // if (!getNote) {
    //   res.status(404).json({ message: "note not found" });
    // }
    res.status(200).json(getNote);
  } catch (error) {
    console.error("error in finding a note", error);
    res.status(500).json({ message: "internal server error" });
  }
}
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updateNote) {
      res.status(404).json({ message: "note not found" });
    }
    res.status(200).json(updateNote);
  } catch (error) {
    console.error("error in updating note", error);
    res.status(500).json({ message: "internal server error" });
  }
}
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      res.status(404).json({ message: "note not found" });
    }
    res.status(200).json(deletedNote);
  } catch (error) {
    console.error("error in deleting note", error);
    res.status(500).json({ message: "internal server error" });
  }
}
