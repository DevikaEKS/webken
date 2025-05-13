import { Router } from "express";
import { handleCreateBook, handleDeleteBook, handleGetAllBooks, handleGetBookById, handleUpdateBook } from "../../controller/book.js";
import upload from "../../middleware/multer-config.js";

const router = Router();

router.post("/addBook",upload.array('images',5),handleCreateBook)
router.get("/getBooks",handleGetAllBooks)
router.put("/updateBook/:id",handleUpdateBook)
router.delete("/deleteBook/:id",handleDeleteBook)
router.get("/getBookById/:id",handleGetBookById)

export default router