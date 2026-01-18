import { useState } from 'react';
import './App.css';
import Navbar from './assets/navBar/navbar.jsx';
import Home from './assets/mainComponents/home.jsx';
import Skills from './assets/mainComponents/skills.jsx';
import { Projects } from './assets/mainComponents/projects.jsx';

function App() {
  const [selectorNav, setSelectorNav] = useState('Home')

  return (
    <>
      <Navbar
        selectorNav={selectorNav}
        setSelectorNav={setSelectorNav}
      />

      {selectorNav === 'Home' && <Home />}

      {selectorNav === 'Skills' && <Skills />}

      {selectorNav === 'Projects' && <Projects />}

    </>
  );
}

export default App;
