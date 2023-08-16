import './Detail.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getDetailById } from '../../redux/actions/actions';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Detail() {
  const { id } = useParams()

  const dispatch = useDispatch()
  const dog = useSelector((state) => state.detailDog)


  useEffect(()=>{
    dispatch(getDetailById(id))//Llamado a la action getDetailById(id)
  }, [dispatch, id])


  return (
    <div className='container'>
      <div className='header'>
        <h1>{dog.name}</h1>
      </div>
      
      <div className='image-container'>
        <img className='image' src={dog.image} alt={dog.name}></img>
      </div>

      <Link to={`/home`} className='back-button'>Back</Link>

      <div className='details'>
          <div>
              <h3>Id:</h3>
              <p>{dog.id}</p>
          </div>
          <div>
              <h3>Height:</h3>
              <p>{dog.height ? dog.height : `${dog.minHeight} - ${dog.maxHeight}`} Cm</p>
           </div>
          <div>
              <h3>Weight:</h3>
              <p>{`${dog.minWeight} - ${dog.maxWeight}`} Kg</p>
          </div>
           <div>
              <h3>Temperaments:</h3>
              <p>{Array.isArray(dog.temperament) ? dog.temperament.join(', ') : dog.temperament}</p>
          </div>
          <div>
              <h3>Life Span:</h3>
              <p>{dog.created ? `${dog.lifeSpan} years` : dog.lifeSpan}</p>
          </div>
      </div>

    </div>
  );
}

export default Detail;


