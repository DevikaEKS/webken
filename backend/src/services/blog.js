import { pool } from "../config/db.js";

export const createBlog = async (adminId, title, content) => {
  const [result] = await pool.execute(
    'INSERT INTO blog (admin_id, title, content, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())',
    [adminId, title, content]
  );

  return {
    id: result.insertId,
    admin_id: adminId,
    title,
    content
  };
};


export const getBlogs = async(adminId) => {
  const [result] = await pool.execute(
    `SELECT * FROM blog WHERE admin_id = ?`,
    [adminId]
  )
  
  return result
}