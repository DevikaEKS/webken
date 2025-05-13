import { pool } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function loginUser({ email, password }) {
    try {
        const userQuery = "SELECT * FROM user_signup WHERE email = ?";
        const [result] = await pool.query(userQuery, [email]);

        if (result.length === 0) {
            throw new Error("User not found");
        }

        const user = result[0];

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Invalid password");
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            JWT_SECRET,
            { expiresIn: "1d" }
        );

        delete user.password;

        return { user, token };
    } catch (error) {
        throw error;
    }
}
