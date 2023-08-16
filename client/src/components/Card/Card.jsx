import './Card.css';
import { Link } from 'react-router-dom'

function Card({dog}) {



  return (
    <div className='card-container'>

      <Link to={`/detail/${dog.id}`} className='card-link'>
        <img className='img' src={dog.image} alt={dog.name} />

        <h1 className='card-text'>{dog.name}</h1>

        <h3>Temperaments:</h3>
        <p className='card-text'>{Array.isArray(dog.temperament) ? dog.temperament.join(', ') : dog.temperament}</p>

        <h3>Weight:</h3>
        <p className='card-text'>{`${dog.minWeight} - ${dog.maxWeight}`} Kg</p>
      </Link>
      
    </div>
  );
}

export default Card;