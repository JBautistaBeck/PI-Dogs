import axios from "axios"
import { GET_ALL_DOGS, GET_BY_NAME, GET_DETAIL_BY_ID, GET_TEMPERAMENTS, FILTERED_BY_TEMP, FILTERED_BY_ORIGIN, ORDER_ALPHABETICAL, ORDER_WEIGHT } from "../actions-types/actions-types";

export const getAllDogs = () => {
    const endpoint = "http://localhost:3001/dogs"//"https://api.thedogapi.com/v1/breeds";
    return async function (dispatch) {
        const response = await axios.get(endpoint)
        return dispatch({type: GET_ALL_DOGS, payload: response.data})
    }  
}

export const getByName = (name) => {
    const endpoint = "http://localhost:3001/dogs?name="//"https://api.thedogapi.com/v1/breeds";
    try {
          return async function (dispatch) {
        const response = await axios.get(endpoint + name)
        return dispatch({type: GET_BY_NAME, payload: response.data})
        } 
    } catch (error) {
     return alert ("Name was not found") 
    }
 
}

export const getDetailById = (id) => {
    
    const endpoint = "http://localhost:3001/dogs/"

    return async function (dispatch) {
        const response = await axios.get(endpoint + id)
        return dispatch({type: GET_DETAIL_BY_ID, payload: response.data[0]})
    }  
}

export const getTemperaments = () => {

    const endpoint = "http://localhost:3001/temperaments";
    
    return async function (dispatch) {
      try {
        const temperamentsFromApi = (await axios.get(endpoint)).data

        const temperaments = temperamentsFromApi.map((temp) => ({
            id: temp.id,
            name: temp.name,})).sort((a, b) => a.name.localeCompare(b.name)
        )

        return dispatch({
          type: GET_TEMPERAMENTS,
          payload: temperaments,
        })
        
      } catch (error) {
        console.log(error.message);
      }
    };
  }

export const filteredByTemp = (temp) => {

    return {
      type: FILTERED_BY_TEMP,
      payload: temp,
    }
}

export const filteredByOrigin = (origin) => {
    return {
      type: FILTERED_BY_ORIGIN,
      payload: origin,
    }
}

export const alphabeticalOrder = (order) => {
    return {
      type: ORDER_ALPHABETICAL,
      payload: order
    }
}

export const weightOrder = (order) => {
    return {
      type: ORDER_WEIGHT,
      payload: order,
    }
}