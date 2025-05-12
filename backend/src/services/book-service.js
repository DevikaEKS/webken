import { pool } from "../config/db.js";

export async function createBook(bookData){
    const {
    title,
    author_detail,
    quantity,
    kindle,
    audible,
    hardcover,
    audio_cd,
    book_description,
    images = [] 
  } = bookData;

  const [result] = await pool.execute(
    `INSERT INTO book
    (title, author_detail, quantity, kindle, audible, hardcover, audio_cd, book_description, images)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      title,
      author_detail,
      quantity,
      kindle,
      audible,
      hardcover,
      audio_cd,
      book_description,
      JSON.stringify(images)
    ])

    return result
}

export async function getBooks(){
    const [rows] = await pool.query(`SELECT * FROM book`);
    

    return rows;
}

export async function updateBook(bookId, bookData) {
  const {
    title,
    author_detail,
    quantity,
    kindle,
    audible,
    hardcover,
    audio_cd,
    book_description,
    images = [],
  } = bookData;

  const [result] = await pool.execute(
    `UPDATE book SET 
      title = ?, 
      author_detail = ?, 
      quantity = ?, 
      kindle = ?, 
      audible = ?, 
      hardcover = ?, 
      audio_cd = ?, 
      book_description = ?, 
      images = ?, 
      updated_at = CURRENT_TIMESTAMP
     WHERE id = ?`,
    [
      title,
      author_detail,
      quantity,
      kindle,
      audible,
      hardcover,
      audio_cd,
      book_description,
      JSON.stringify(images),
      bookId,
    ]
  );

  return result;
}


export async function deleteBook(bookId){
    const [ result ] = await pool.execute(
        `DELETE FROM book WHERE id = ?`,[bookId]
    )

    return result
}