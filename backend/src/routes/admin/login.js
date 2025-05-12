import { Router } from "express";
import { handleAdminLogin } from "../../controller/admin-login.js";
const router = Router();

router.post("/login",handleAdminLogin)


export default router