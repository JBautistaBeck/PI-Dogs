const { createDogController, getDetailByIdController, getAllDogsController, getBreedByNameController } = require("../controllers/dogsControllers")



const getDogsHandler = async (req, res) => {
    const { name } = req.query

    try {
        if(name){
            const breedByName = await getBreedByNameController(name)
            res.status(200).json(breedByName)
        } else {
            const response = await getAllDogsController()
            res.status(200).json(response)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



const getDogsDetailByIdHandler = async (req, res) => {
    const { id } = req.params
    const source = isNaN(id) ? "bdd" : "api";

    try {
        const response = await getDetailByIdController(id, source)

        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



const postDogsHandler = async (req, res) => {
    const {image, name, minHeight, maxHeight, minWeight, maxWeight, lifeSpan, temperaments } = req.body

    
    const temperamentsNames = temperaments.map((temp) => temp.name )
    

    try {
        let newDog = await createDogController(image, name, minHeight, maxHeight, minWeight, maxWeight, lifeSpan, temperamentsNames);



        res.status(200).json(newDog)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}







module.exports = { getDogsHandler, getDogsDetailByIdHandler, postDogsHandler}