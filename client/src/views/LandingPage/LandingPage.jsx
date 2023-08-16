import './LandingPage.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function LandingPage() {
  return (
    <div className='landing-page'>
      <div className='info-container'>
        <h1 className='title'>The Dog Company</h1>
        <p className='intro-text'>
        Welcome to the ultimate destination for finding your ideal canine companion. 
        At our dedicated platform, we're passionate about connecting you with the furry friend that perfectly matches your lifestyle, 
        preferences, and heart's desires. Whether you're a seasoned dog owner or embarking on your first tail-wagging adventure, 
        we're here to make the journey of finding your new best friend an enjoyable and seamless experience.
        </p>
        <h4 className='title2'>Join the Journey:</h4>
        <p className='journey-text'>
        Whether you're looking for a running partner, a cuddle buddy, or a loyal friend for life, your perfect dog is just a click away. Begin your journey of 
        discovering canine companionship today, and let us guide you toward creating heartwarming memories that will last a lifetime.     
        </p>
        <br/><br/>
          <Link to="/home" className='home-link'>Let´s find the perfect dog for you!</Link>
      </div>
    </div>
  );
}

export default LandingPage;