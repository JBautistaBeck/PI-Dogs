const infoApiCleaner = (arr) => {
    return arr.map((breed)=>{
        const metricValues = breed.weight.metric.split(' - ');
    return {
        id: breed.id,
        image: breed.image?.url || `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`, 
        name: breed.name,
        height: breed.height.metric,
        minWeight: metricValues[0],
        maxWeight: metricValues[1],
        lifeSpan: breed.life_span,
        temperament: breed.temperament,//[breed.temperament],
        created: false,//Para despues poder buscar por si es creado o de la API
    }
})}


module.exports = { infoApiCleaner }