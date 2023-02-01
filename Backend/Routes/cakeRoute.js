const express = require("express")
const router = express.Router()
const { getAllCakes,
    getCakeById,
    addCake,
    UpdateCake,
    deleteCake} = require("../Controllers/cakeControllers")


router.get("/getAllCakes", getAllCakes)
router.get("/getCake/:id", getCakeById)
router.post("/addCake", addCake)
router.patch("/updateCake/:id", UpdateCake)
router.delete("/deleteCake/:id", deleteCake)




module.exports = router 
