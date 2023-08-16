import './Cards.css';
import Card from '../Card/Card'
// import Filters from '../Filters/Filters';
import { useState, useEffect } from 'react';

function Cards({allDogs}) {

  const dogsPerPage = 8;
  const totalPages = Math.ceil(allDogs.length / dogsPerPage); // calcular el total de paginas //.ceil redondeo para arriba

  const [currentPage, setCurrentPage] = useState(1); //pagina actual

  const startIndex = (currentPage - 1) * dogsPerPage;//calculo el primer indice
  const endIndex = startIndex + dogsPerPage;//y el segundo indice es el primero + 8

  const dogsToShow = allDogs.slice(startIndex, endIndex);

  const nextHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [allDogs]);


  return (

    <div>
      
      <div className='cards-list'>

        {dogsToShow?.map((dog)=> ( <Card dog={dog}/> ))}
        
        
      </div>

      
      <div className="pagination">
        <button onClick={prevHandler}> Prev </button>

        <div className='counter-pages'> 
          Page {currentPage} of {totalPages}
        </div>

        <button onClick={nextHandler}> Next  </button>
      </div>
      
    </div>
  );
}

export default Cards;

