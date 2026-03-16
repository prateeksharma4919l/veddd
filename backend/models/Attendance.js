
const mongoose = require("mongoose")

const AttendanceSchema = new mongoose.Schema({
  employeeId:String,
  checkIn:Date,
  checkOut:Date,
  date:Date
})

module.exports = mongoose.model("Attendance",AttendanceSchema)
