import { useState } from 'react';
import './App.css';
import Navbar from './assets/navBar/navbar.jsx';
import Home from './assets/mainComponents/home.jsx';
import Mathle from './assets/mainComponents/mathle.jsx';
import MyRoute from './assets/mainComponents/myRoute.jsx';
import Sites from './assets/mainComponents/sites.jsx';

function App() {
  const [selectorNav, setSelectorNav] = useState('Home')

  return (
    <>
      <Navbar
        selectorNav={selectorNav}
        setSelectorNav={setSelectorNav}
      />

      {selectorNav === 'Home' && <Home />}

      {selectorNav === 'MyRoute' && <MyRoute />}

      {selectorNav === 'Mathle' && <Mathle />}

      {selectorNav === 'Sites' && <Sites />}

      
    </>
  );
}

export default App;
