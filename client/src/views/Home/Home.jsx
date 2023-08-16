import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../../redux/actions/actions';

import './Home.css';
import Cards from '../../components/Cards/Cards'
import SearchBar from '../../components/SearchBar/SearchBar';
import Filters from '../../components/Filters/Filters';

function Home() {

  const dispatch = useDispatch()//Forma en que yo le comunico/envio a mi store
  const allDogs = useSelector((state) => state.allDogs) //Le indico a mi componente a que estado quiero que este suscripto

  console.log(allDogs);

  useEffect(()=>{
    dispatch(getAllDogs())//En cuanto mi pagina si cargue(mount) que se ejecute la action
    //return (()=>{clearDetail()})  //Que hacer al momento del unmount (EJEMPLO: clearDetail())
  }, [dispatch]) //Que solo se ejecute al momento de hacer el dispatch

  return (
    <div className='home'>
      <SearchBar/>
      <Filters/>
      <Cards allDogs= {allDogs}/>
    </div>
  );
}

export default Home;