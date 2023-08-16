const axios = require("axios")
const { TemperamentModel } = require("../db");
const { URL, API_KEY } = require("../utils/config");


const uploadTemperamentsToDbController = async () => {
    let dogsApi = (await axios.get(URL)).data
    

    dogsApi.forEach((dog) => {
        if(dog.temperament) {
            const temps = dog.temperament.split(", ")
                
            temps.forEach((temp) => {
                TemperamentModel.findOrCreate({ //Buscar el problea de por que es undifiend
                    where: {
                        name: temp,
                    },
                })
            })
        }
    })
}


const getAllTemperamentsController = async () => {
    return await TemperamentModel.findAll();
  };


module.exports = { uploadTemperamentsToDbController, getAllTemperamentsController }



