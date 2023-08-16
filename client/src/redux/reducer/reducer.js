import { GET_ALL_DOGS, GET_BY_NAME, GET_DETAIL_BY_ID, GET_TEMPERAMENTS, FILTERED_BY_TEMP, FILTERED_BY_ORIGIN, ORDER_ALPHABETICAL, ORDER_WEIGHT } from "../actions-types/actions-types"

let initialState = {allDogs: [],copyAllDogs: [], detailDog: [], temperaments: []} //La copy para no midificar el estado cuando hago los filtros u ordenamiento

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_DOGS:
            return{
                ...state,
                allDogs: action.payload,
                copyAllDogs: action.payload

        }
        
        case GET_BY_NAME:
            return{
                ...state,
                allDogs: action.payload
        }
            
        case GET_DETAIL_BY_ID:    
            return{
                ...state,
                detailDog: action.payload
        }

        case GET_TEMPERAMENTS:    
            return{
                ...state,
                temperaments: action.payload
        }

        case FILTERED_BY_TEMP:
            let temperamentsFiltered = [...state.allDogs]

            if(action.payload === "All"){
                temperamentsFiltered = [...state.copyAllDogs]
            } else {
                temperamentsFiltered = state.copyAllDogs.filter((dog) => {
                    //Para los perros de la API
                    if(dog.temperament) {
                        // const temperaments = dog.temperament.split(',').map((t) => t.trim())
                        return dog.temperament.includes(action.payload)
                    }
                    //Para los perros de la DB
                    if(dog.temperament) {
                        return dog.temperaments.some((temp) => temp.name === action.payload);
                    }
                    //return false
                })
            }
            return{
                ...state,
                allDogs: temperamentsFiltered,
        }

        case FILTERED_BY_ORIGIN: 
            let originFiltered = [...state.allDogs]

            if(action.payload === "All") {
                originFiltered = [...state.copyAllDogs]
            } else if(action.payload === "DB") {
                originFiltered = state.copyAllDogs.filter((dog) => dog.created === true)
            } else if (action.payload === "API") {
                originFiltered = state.copyAllDogs.filter((dog) => dog.created === false)
            }
            return{
                ...state,
                allDogs: originFiltered
            }
        
        case ORDER_ALPHABETICAL:
            let sortDogs = [...state.allDogs]
            let newSort = action.payload

            sortDogs.sort(function(a,b){
                if (a.name.toLowerCase() > b.name.toLowerCase()){
                    return newSort === 'ascendente' ? 1 : -1;
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()){
                    return newSort === 'ascendente' ? -1 : 1; 
                }
                return 0
            })

            return {
                ...state,
                allDogs: sortDogs
            }

        case ORDER_WEIGHT:
            let weightOrdered = [...state.allDogs]
            const newWeightSort = action.payload

            weightOrdered.sort(function(a,b) {
                const aMinWeight = Number(a.minWeight) || 0;
                const bMinWeight = Number(b.minWeight) || 0;

                if(aMinWeight !== bMinWeight) {
                    if(newWeightSort === "descendente") {
                        return bMinWeight - aMinWeight
                    } else if (newWeightSort === "ascendente") {
                        return aMinWeight - bMinWeight
                    }
                } else {
                    const aMaxWeight = Number(a.maxWeight) || 0;
                    const bMaxWeight = Number(b.maxWeight) || 0;

                    if(aMaxWeight !== bMaxWeight) {
                        if (newWeightSort === "descendiente") {
                            return bMaxWeight - aMaxWeight
                        } else if (newWeightSort === "ascendente") {
                            return aMaxWeight - bMaxWeight
                        }
                    }
                }
                return 0
            })
            
            return {
                ...state,
                allDogs: weightOrdered
            }

        default:
            return state
    }
}

export default reducer;

