const router = require("express").Router();

router.post("/login",(req,res)=>{

const {email,password} = req.body

if(email==="admin@ved.com" && password==="admin123"){
res.json({
role:"admin",
token:"sampletoken"
})
}else{
res.status(401).json("Invalid Login")
}

})

module.exports = router;