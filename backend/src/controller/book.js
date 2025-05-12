import { createBook,deleteBook,getBooks, updateBook } from "../services/book-service.js";

export async function handleCreateBook(req, res) {
  try {
    const bookData = req.body;

    
    if (!bookData.title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const result = await createBook(bookData);

    return res.status(201).json({
      message: "Book created successfully",
      bookId: result.insertId
    });

  } catch (error) {
    console.error("Error creating book:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function handleGetAllBooks(req, res) {
  try {
    const books = await getBooks();
    return res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function handleUpdateBook(req,res){
    const bookId = req.params.id;
    const bookData = req.body;
    try {
        const result = await updateBook(bookId,bookData);

        if(result.affectedRows === 0){
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json({ message: "Book updated successfully" });
    } catch (error) {
         console.error("Error updating book:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function handleDeleteBook(req,res){
    const bookId = req.params.id;
    if(!bookId){
        return res.status(401).json({
            message : "Provide an bookId to delete"
        })
    }

    try {
        const result = await deleteBook(bookId);
        if(result.affectedRows === 0){
            return res.status(404).json({ message: "Book is not deleted" });
        }
        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
         console.error("Error updating book:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}