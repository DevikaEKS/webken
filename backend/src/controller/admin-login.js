import { adminLogin } from "../services/admin-login-service.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_jwt_secret";


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
            const admin = result.admin;

            console.log(admin)
            const token = jwt.sign({ id: admin.id }, JWT_SECRET);
            
           return res.status(200).json({
                message: "Login successful",
                admin: { id: admin.id, username: admin.username },
                token
        });
        } else {
            return res.status(401).json({ message: result.message });
        }
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}