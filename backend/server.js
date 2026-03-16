
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/auth")
const riderRoutes = require("./routes/riders")
const attendanceRoutes = require("./routes/attendance")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/vedlogistics")

app.use("/api/auth",authRoutes)
app.use("/api/riders",riderRoutes)
app.use("/api/attendance",attendanceRoutes)

app.listen(5000,()=>{
  console.log("Backend running on port 5000")
})
