import './Filters.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { getAllDogs, getTemperaments, filteredByTemp, filteredByOrigin, alphabeticalOrder, weightOrder } from '../../redux/actions/actions';

function Filters() {

    const dispatch = useDispatch();

    const allTemperaments = useSelector((state)=>state.temperaments)
    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);


    //Filtro por Temperamento
    function handleFilterTemp(event){
        event.preventDefault()
        
        dispatch(filteredByTemp(event.target.value));
    }

    //Filtro por Origen
    const handleFilterOrigin = (event) => {
        event.preventDefault()

        dispatch(filteredByOrigin(event.target.value))
    }

    //Orden Alfabetico 
    const handleAlphabeticalOrder = (event) => {
        event.preventDefault()

        dispatch(alphabeticalOrder(event.target.value))
    } 

    //Orden por peso
    const handleWeightOrder = (event) => {
        event.preventDefault()

        dispatch(weightOrder(event.target.value))
    }

    function handleReset(event){
        event.preventDefault();
  
        dispatch(getAllDogs());
    }



  return (

    <div className='filters-container'>

        <div className='filter-group'>
        <label>Temperaments:</label>
        <select className='select-box' onChange={event => handleFilterTemp(event)} defaultValue='All'>
            
                <option value='All'>All temperaments</option>
                {allTemperaments?.map((temp)=>(
                        <option value={temp.name} key={temp.id}>{temp.name}</option>
                ))}

        </select>
        </div>

        <div className='filter-group'>           
        <label>Origin:</label>
        <select className='select-box' onChange={event => handleFilterOrigin(event)} defaultValue='All'>

                <option value='All'>All temperaments</option>
                <option value='DB'>Created</option>
                <option value='API'>Not Created</option>

        </select>
        </div>

        <div className='filter-group'> 
        <label>Order A-Z:</label>
        <select className='select-box' onChange={event => handleAlphabeticalOrder(event)} defaultValue='default'>

                <option value='default' disabled> - </option>
                <option value='ascendente'>A - Z</option>
                <option value='descendente'>Z - A</option>

        </select>
        </div>

        <div className='filter-group'>
        <label>Weight:</label>
        <select className='select-box' onChange={event => handleWeightOrder(event)} defaultValue='default'>

                <option value='default' disabled> - </option>
                <option value='ascendente'>Ascending</option>
                <option value='descendente'>Descending</option>

        </select>

        <button className='button-reset' onClick={event => handleReset(event)}>Reset Filters</button>
        </div>

    </div>
  )
}

export default Filters;

