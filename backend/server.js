import express from "express"
import userRoute from "./src/routes/user/contact.js"
import adminRoutes from "./src/routes/admin/book.js"
import adminLogin from "./src/routes/admin/login.js"
import userRegister from "./src/routes/user/register.js"
import userLogin from "./src/routes/user/login.js"
import { authenticateAdmin, authenticateToken } from "./src/middleware/authmiddleware.js"
import { getCurrentUser } from "./src/controller/user-controller.js"
import cors from "cors"





const app = express();


app.use(cors({
    origin : "http://localhost:5173"
}))

app.use(express.json())









//This is our backend
app.use("/api/v1/user",userRoute)
app.use("/api/v1/admin",adminRoutes)
app.use("/api/v1/admin",adminLogin)
app.use("/api/v1/user",userRegister)
app.use("/api/v1/user",userLogin)
app.get("/api/v1/user/me",authenticateToken,getCurrentUser)


app.use('/uploads', express.static('uploads'));


app.listen(3000,() => {
    console.log("server running on port 3000")
})
