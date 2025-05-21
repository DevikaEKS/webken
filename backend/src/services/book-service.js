import { pool } from "../config/db.js";

export async function createBook(bookData) {
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
    stars 
  } = bookData;

  const [result] = await pool.execute(
    `INSERT INTO book (title, author_detail, quantity, kindle, audible, hardcover, audio_cd, book_description, images, stars) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
      stars
    ]
  );

  return result;
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


export async function deleteBook(bookId) {
    const conn = await pool.getConnection();
    try {
        await conn.beginTransaction();

        
        await conn.execute(`DELETE FROM reviews WHERE book_id = ?`, [bookId]);

        
        const [result] = await conn.execute(`DELETE FROM book WHERE id = ?`, [bookId]);

        await conn.commit();
        return result;
    } catch (error) {
        await conn.rollback();
        throw error;
    } finally {
        conn.release();
    }
}

export async function getBookById(bookId) {
  const [rows] = await pool.execute(
    `SELECT * FROM book WHERE id = ?`,
    [bookId]
  );

  return rows[0]; 
}
