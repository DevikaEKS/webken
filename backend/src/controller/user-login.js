import { loginUser } from "../services/user-login-service.js";


export async function loginUserController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const { user, token } = await loginUser({ email, password });

        return res.status(200).json({
            message: "Login successful",
            user,
            token,
        });
    } catch (error) {
        return res.status(401).json({
            message: error.message || "Login failed",
        });
    }
}
