import express from "express"
import userRoute from "./src/routes/user/contact.js"
import adminRoutes from "./src/routes/admin/book.js"
import adminLogin from "./src/routes/admin/login.js"

import cors from "cors"

const app = express();


app.use(cors({
    origin : "http://localhost:5173"
}))

app.use(express.json())
app.use("/api/v1/user",userRoute)
app.use("/api/v1/admin",adminRoutes)
app.use("/api/v1/admin",adminLogin)

app.listen(3000,() => {
    console.log("server running on port 3000")
})
