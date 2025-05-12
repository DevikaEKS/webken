import { adminLogin } from "../services/admin-login-service.js";


export async function handleAdminLogin(req,res){
    const loginData = req.body;

    if(!loginData){
        return res.status(401).json({
            message : "Login Creditiantail is Required"
        })

    }

    try {
        const result = await adminLogin(loginData);

        if (result.success) {
            return res.status(200).json({ message: "Login successful", admin: result.admin });
        } else {
            return res.status(401).json({ message: result.message });
        }
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}