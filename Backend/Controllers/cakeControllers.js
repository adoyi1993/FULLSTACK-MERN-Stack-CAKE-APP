const Cake = require("../Models/cakeModel")

const getAllCakes = async (req, res) =>{
    try {
        const cake = await Cake.find()
        if(!cake){
            res.status(404).json("Cakes Not Found")
        }
        else{
            res.status(200).json(cake)
        }
    } catch (error) {
        console.log(error)
    }
}


const getCakeById = async (req, res) =>{
    const {id} = req.params 
    try {
        const cake = await Cake.findById(id)
        if(!cake){
            res.status(404).json("Cake Not Found")
        }
        else{
            res.status(200).json(cake)
        }
    } catch (error) {
        console.log(error)
    }
}



const addCake = async (req, res) =>{
    const {name, quantity, phone, amount, category, image, description, slider1, slider2, slider3 } = req.body 
    try {
        const cake = await Cake.create({name, quantity, phone, amount, category, image, description, slider1, slider2, slider3})
        if(!cake){
            res.status(500).json("Unable to add cake")
        }
        else{
            cake.save()
            res.status(200).json(cake)
        }
    } catch (error) {
        console.log(error)
    }
}



const UpdateCake= async (req, res) =>{
    const {id} = req.params
    const {name, quantity, phone, amount, category, image, description, slider1, slider2, slider3} = req.body 
    try {
        const cake = await Cake.findByIdAndUpdate(id, {name, quantity, phone, amount, category, image, description, slider1, slider2, slider3})
        if(!cake){
            res.status(500).json("Unable to Update Cake")
        }
        else{
            res.status(200).json(cake)
        }
    } catch (error) {
        console.log(error)
    }
}



const deleteCake = async (req, res) =>{
    const {id} = req.params
    try {
        const cake = await Cake.findByIdAndDelete(id)
        if(!cake){
            res.status(500).json("Unable to Delete Cake")
        }
        else{
            res.status(200).json("Cake Deleted Successfully")
        }
    } catch (error) {
        console.log(error)
    }
}




module.exports  = {
    getAllCakes,
    getCakeById,
    addCake,
    UpdateCake,
    deleteCake
}