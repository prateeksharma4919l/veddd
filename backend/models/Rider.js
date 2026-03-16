
const mongoose = require("mongoose")

const RiderSchema = new mongoose.Schema({
  name:String,
  bikeNumber:String,
  morningReading:Number,
  eveningReading:Number,
  totalKM:Number,
  status:String
})

module.exports = mongoose.model("Rider",RiderSchema)
