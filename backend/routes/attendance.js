
const router = require("express").Router()
const Attendance = require("../models/Attendance")

router.post("/checkin", async(req,res)=>{

  const attendance = new Attendance({
    employeeId:req.body.employeeId,
    checkIn:new Date(),
    date:new Date()
  })

  await attendance.save()

  res.json(attendance)

})

module.exports = router
