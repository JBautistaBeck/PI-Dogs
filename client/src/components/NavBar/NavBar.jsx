import './NavBar.css';
import { Link } from "react-router-dom"
import dogImage1 from '../../utils/NavBar-Picture.png'
import dogImage2 from '../../utils/NavBar-picture2.png'

function NavBar() {
  return (
    <div className='nav-container'>

      <img src={dogImage1} className='nav-image' alt='patitasperro1'></img>
      <img src={dogImage2} className='nav-image2' alt='patitasperro2'></img>
      <img src={dogImage1} className='nav-image3' alt='patitasperro3'></img>
      <img src={dogImage2} className='nav-image4' alt='patitasperro4'></img>


      <Link to="/" > <button className='nav-button'>Welcome</button> </Link>

      <Link to="/home"> <button className='nav-button'>Home</button> </Link>

      <Link to="/form"> <button className='nav-button'>Form</button> </Link>


    </div>
  );
}

export default NavBar;