import { useState } from 'react';
import './Form.css';
import validate from "../../Validations/ValidateForm"
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getTemperaments } from '../../redux/actions/actions';
import { useEffect } from 'react';

function Form() {

  const allTemperaments = useSelector((state) => state.temperaments)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const [form, setForm] = useState({
    image:"",
    name:"",
    minHeight:"",
    maxHeight:"",
    minWeight:"",
    maxWeight:"",
    lifeSpan:"",
    temperaments:[],
  })

  const [error, setError] = useState({//lo que escriba en estas comillas aparece desde el principio
    image: "",
    name: "",
    minHeight:"",
    maxHeight:"",
    minWeight:"",
    maxWeight:"",
    lifeSpan:"",
    temperaments:[],
  })

  const handleChange = (event) => {

    const newState = { ...form }

    setError(validate({
      ...newState,
      [event.target.name]: event.target.value
    }))  


    setForm({
      ...newState,
      [event.target.name]: event.target.value
    })

  }

  const submitHandler = (event) => {
    event.preventDefault();

    const endpoint = "http://localhost:3001/dogs";

    const response = axios
    .post(endpoint, {...form})//, temperaments: form.temperaments.map((temp) => temp.id)
    .then((res) => {
      setForm({
      image: "",
      name: "",
      minHeight: "",
      maxHeight: "",
      minWeight: "",
      maxWeight: "",
      lifeSpan: "",
      temperaments: [],
    })
    alert("Dog created successfully!");
  })
    .catch((error) => {
      alert("Error: " + error.response.data.error)
    })
  }

  const selectHandler = (event) => {//Actualizamos el estado.temp cada vez que elijo un temp
    if(event.target.value && !form.temperaments.some((temperament) => temperament.name === event.target.value)) {
      const temperamentName = event.target.value
      const temperamentId = event.target.options[event.target.selectedIndex].id //Selecciono el ID del elemento que estoy parado actualmente
      const newState = {...form}
      newState.temperaments = [ //Le cargo a mi estado form los nuevo temperamentos
        ...newState.temperaments,
        {id: temperamentId, name: temperamentName},
      ]
      setForm(newState)
    }
  }


  return (
    <div className='form-container'>
      <form onSubmit={submitHandler}>

        <h1 className='form-title'>Create your Dog</h1>

        <div className='input-container'>
          <label>Name:</label>
          <input name='name' onChange={handleChange}/>
          <span className='error-message'>{error.name}</span>
        </div>

        <div className='input-container'>
          <label>Image:</label>
          <input name='image' onChange={handleChange}/>
          <span className='error-message'>{error.image}</span>
        </div>

        <div className='input-container'>
          <label>Minimum Height:</label>
          <input name='minHeight' onChange={handleChange}/>
          <span className='error-message'>{error.minHeight}</span>
        </div>

        <div className='input-container'>
          <label>Maximum Height:</label>
          <input name='maxHeight' onChange={handleChange}/>
          <span className='error-message'>{error.maxHeight}</span>
        </div>

        <div className='input-container'>
          <label>Minimum Wight:</label>
          <input name='minWeight' onChange={handleChange}/>
          <span className='error-message'>{error.minWeight}</span>
        </div>

        <div className='input-container'>
          <label>Maximum Wight:</label>
          <input name='maxWeight' onChange={handleChange}/>
          <span className='error-message'>{error.maxWeight}</span>
        </div>

        <div className='input-container'>
          <label>Life Span:</label>
          <input name='lifeSpan' onChange={handleChange}/>
          <span className='error-message'>{error.lifeSpan}</span>
        </div>

        {/* Seleccionar Temperamentos */}
        <div>
          <label>Temperaments:</label>
          <select name='temperaments' onChange={selectHandler}>

            <option>
              Select one or more temperaments
            </option>

            {allTemperaments?.map((temperament) => (
              <option key={temperament.id} id={temperament.id}>{temperament.name}</option>))
            }
            
          </select>  
          <span className='error-message'>{error.temperaments}</span>
        </div>

        {/* Temperamentos selecionados */}
        <div>
          <h2>Selected Temperaments: </h2>
          {form.temperaments && form.temperaments.map((temperament) => 
            <button  key={temperament.id}>{temperament.name}</button>)}
        </div>

        {/* Vista previa foto */}
        <div className='image-container'>  
          <h3>Preview Image:</h3>
          <img className='preview-image' src={form.image} alt={form.name}></img> 
        </div>

        {/* Boton de creacion     */}
        <div className='submit-container'>
          {error.name || error.image || error.minHeight || error.maxHeight || error.minWeight || error.maxWeight || error.lifeSpan || error.temperaments 
          ? null 
          : <button className='submit-button' type='submit'> Creat Dog</button>
          }
        </div>


      </form>

    </div>
  );
}

export default Form;