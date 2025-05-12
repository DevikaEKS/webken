import { pool } from "../config/db.js"

export async function saveEmailMessage(first_name,last_name,email){
    const query = `INSERT INTO  email_form (first_name,last_name,email) VALUES (?, ?, ?)`;
    const [result] = await pool.execute(query,[first_name,last_name,email]);
    return result;
}

export async function getEmailMessages() {
    const query = `SELECT id, first_name, last_name, email FROM email_form ORDER BY id DESC`;
    const [rows] = await pool.execute(query);
    return rows;
}