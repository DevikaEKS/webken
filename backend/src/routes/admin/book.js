import { Router } from "express";
import { handleCreateBook, handleDeleteBook, handleGetAllBooks, handleUpdateBook } from "../../controller/book.js";

const router = Router();

router.post("/addBook",handleCreateBook)
router.get("/getBooks",handleGetAllBooks)
router.put("/updateBook/:id",handleUpdateBook)
router.delete("/deleteBook/:id",handleDeleteBook)

export default router