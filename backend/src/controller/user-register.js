import { registerUser } from "../services/user-register-service.js";

export async function registerUserController(req, res) {
    try {
        const user = await registerUser(req.body);
        return res.status(201).json({
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message || "Failed to register user",
        });
    }
}
