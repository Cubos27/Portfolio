import { useState } from 'react';
import './App.css';
// import RubikCube from './assets/rubikCube/rubikCube.jsx';
import Navbar from './assets/navBar/navbar.jsx';
import Home from './assets/mainComponents/home.jsx';
import Mathle from './assets/mainComponents/Mathle.jsx';
import MyRoute from './assets/mainComponents/myRoute.jsx';

function App() {
  const [selectorHome, setSelectorHome] = useState(true);
  const [selectorMyRoute, setSelectorMyRoute] = useState(false);
  const [selectorMathle, setSelectorMathle] = useState(false);

  return (
    <>
      <Navbar
        selectorHome={selectorHome}
        setSelectorHome={setSelectorHome}
        selectorMyRoute={selectorMyRoute}
        setSelectorMyRoute={setSelectorMyRoute}
        selectorMathle={selectorMathle}
        setSelectorMathle={setSelectorMathle}
      />

      {selectorHome && <Home />}

      {selectorMyRoute && <MyRoute />}

      {selectorMathle && <Mathle />}
    </>
  );
}

export default App;
