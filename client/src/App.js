import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import Home from './views/Home/Home';
import LandingPage from './views/LandingPage/LandingPage';
import ErrorPage from './views/ErrorPage/ErrorPage';
import NavBar from './components/NavBar/NavBar'
import { Route, Switch, useLocation } from 'react-router-dom'

function App() {

    const location = useLocation()

  return (
      <div className="App">

        {location.pathname !== "/" && <NavBar/>}

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/form" component={Form} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    
  );
}

export default App;

