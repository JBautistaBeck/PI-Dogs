import { useState } from 'react';
import './SearchBar.css';
import { useDispatch } from 'react-redux';
import { getByName, getAllDogs } from '../../redux/actions/actions';

function SearchBar() {

  const dispatch = useDispatch();
  const [ searchString, setSearchString ] = useState({ name: "",})


  const handleChange = (e) => {
    e.preventDefault()
    setSearchString({name: e.target.value,})
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    
    const name = searchString.name

    if(!name) {
      return alert("Name missing")
    } else {
      dispatch(getByName(name))
      setSearchString({name:""})
    }
  }

    // Función para manejar la búsqueda cuando se borra el contenido del campo
    const handleClear = () => {
      dispatch(getAllDogs()); // Llama a la acción para obtener todos los perros
      setSearchString({ name: "" }); // Limpia el campo de búsqueda
    }



  return (
    <div className='searchbar-container'>
      <form onChange={handleChange} className='searchbar-form'>
        <input placeholder='Busqueda'/>

        <div className='searchbar-buttons-container'>
          <button className='searchbar-button' type='submit' onClick={handleSubmit}> Buscar </button>
          <button className='searchbar-button' type='clear' onClick={handleClear}> Clear </button>
        </div>

      </form>
    </div>
  );
}

export default SearchBar;