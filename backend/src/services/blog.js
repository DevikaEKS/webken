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

export const getBlog = async (adminId, blogId) => {
  const [result] = await pool.execute(
    `SELECT * FROM blog WHERE admin_id = ? AND id = ?`,
    [adminId, blogId]
  );
  return result[0]; 
};

export const updateBlog = async (adminId, blogId, { title, content }) => {
  const [result] = await pool.execute(
    `UPDATE blog 
     SET title = ?, content = ?, updated_at = CURRENT_TIMESTAMP 
     WHERE id = ? AND admin_id = ?`,
    [title, content, blogId, adminId]
  );
  return result.affectedRows > 0; // returns true if update succeeded
};