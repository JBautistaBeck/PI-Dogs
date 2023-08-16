const {DogModel, TemperamentModel} = require("../db");
const { URL, API_KEY } = require("../utils/config");
const axios = require("axios")
const { infoApiCleaner } = require("../utils/functions");
const { Op } = require("sequelize");




const getBreedByNameController = async (name) => {
    const infoApi = (await axios.get(URL)).data

    const dogsApi = infoApiCleaner(infoApi)//Funcion para limpiar la info.

    const dogFiltered = dogsApi.filter( (dog) => dog.name.toLowerCase().includes(name.toLowerCase()))

    const dogDb = await DogModel.findAll({where: { name: {[Op.iLike]:`%${name}%` }}})

    return [...dogFiltered,...dogDb]

}



const getAllDogsController = async () => {
    let dogsDB = await DogModel.findAll({
        include: {
            model: TemperamentModel,
            through: { attributes: [] },
            attributes: ["name"],
          },
    })

    const dogsFormatted = dogsDB.map(dog => {
        const temperament = dog.TemperamentModels.map(temp => temp.name);
        return { ...dog.toJSON(), temperament };
    });
    
    const infoApi = (await axios.get(URL)).data

    const dogsApi = infoApiCleaner(infoApi)//Funcion para limpiar la info de la API.


    return [...dogsFormatted,...dogsApi]
}



const getDetailByIdController = async (id, source) => {

    if (source === "api") {
        const infoApi = (await axios.get(URL)).data

        const dogsApi = infoApiCleaner(infoApi)

        const dogFilteredByID = dogsApi.filter((dog) => {
            return dog.id == id;
          });
        
        return dogFilteredByID  

    } else {
        //const breedDb = await DogModel.findByPk(id)
        let dogsDB = await DogModel.findAll({
            include: {
                model: TemperamentModel,
                through: { attributes: [] },
                attributes: ["name"],
              },
        })

        const dogsFormatted = dogsDB.map(dog => {
            const temperament = dog.TemperamentModels.map(temp => temp.name);
            return { ...dog.toJSON(), temperament };
        });
        
        const dogDB = dogsFormatted.filter((dog) => {
            return  dog.id === id
        })

        return dogDB
        //return [breedDb]
    }
}


const createDogController = async (image, name, minHeight, maxHeight, minWeight, maxWeight, lifeSpan, temperamentsName) => {

    const allDogs = await getAllDogsController()
    
    const findCoincidence = allDogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase())

    if (findCoincidence) throw new Error (`The dog named ${name.toUpperCase()} already exists`)

    // Crear el nuevo perro en la tabla DogModel
    const newDog = await DogModel.create({
        image,
        name,
        minHeight,
        maxHeight,
        minWeight,
        maxWeight,
        lifeSpan
    });


    // Buscar los temperamentos en la tabla TemperamentModel por los IDs proporcionados
    const foundTemperaments = await TemperamentModel.findAll({
        where: {
            name: temperamentsName
        }
    });

    // Asociar los temperamentos encontrados al perro recién creado
    await newDog.addTemperamentModel(foundTemperaments);


    return {newDog ,temperament: foundTemperaments};
}




module.exports = { 
    getBreedByNameController, 
    getAllDogsController,
    getDetailByIdController,
    createDogController
}