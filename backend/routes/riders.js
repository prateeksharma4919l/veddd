
const router = require("express").Router()
const Rider = require("../models/Rider")

router.post("/add", async(req,res)=>{

  const rider = new Rider(req.body)

  await rider.save()

  res.json(rider)

})

router.get("/", async(req,res)=>{

  const riders = await Rider.find()

  res.json(riders)

})

module.exports = router
