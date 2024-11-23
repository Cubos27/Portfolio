import { useState } from "react";
import "./App.css";
import RubikCube from "./assets/rubikCube/rubikCube.jsx";
import Navbar from "./assets/navBar/navbar.jsx";

function App() {
  const [selectorHome, setSelectorHome] = useState(true);
  const [selectorProjects, setSelectorProjects] = useState(false);
  const [selectorDescription, setSelectorDescription] = useState(false);

  return (
    <>
      <Navbar
        selectorHome={selectorHome}
        setSelectorHome={setSelectorHome}
        selectorProjects={selectorProjects}
        setSelectorProjects={setSelectorProjects}
        selectorDescription={selectorDescription}
        setSelectorDescription={setSelectorDescription}
      />
      <RubikCube />

      {selectorHome && (
        <section>
          <h2>Welcome</h2>
          <p>
            I'm Adriel Andrade, FullStack developer <br /> and I'm ready to make
            your new amazing wesite
          </p>
        </section>
      )}

      {selectorProjects && (
        <section>
          <p>Projects</p>
        </section>
      )}

      {selectorDescription && (
        <section>
          <p>Description</p>
        </section>
      )}
    </>
  );
}

export default App;
