import { useState, useEffect } from "react";
import "./navbar.css";

function Navbar({
  selectorHome,
  setSelectorHome,
  selectorProjects,
  setSelectorProjects,
  selectorDescription,
  setSelectorDescription,
}) {
  useEffect(() => {
    console.log("selectorHome: ", selectorHome);
    console.log("selectorProjects: ", selectorProjects);
    console.log("selectorDescription: ", selectorDescription);
  }, [selectorHome, selectorProjects, selectorDescription]);

  return (
    <>
      <nav>
        <article className="button-container">
          <button
            className="button-nav"
            onClick={() => {
              setSelectorHome(true);
              setSelectorProjects(false);
              setSelectorDescription(false);
            }}
          >
            Home
          </button>
          {selectorHome && <div className="selector"></div>}
        </article>

        <article className="button-container">
          <button
            className="button-nav"
            onClick={() => {
              setSelectorHome(false);
              setSelectorProjects(true);
              setSelectorDescription(false);
            }}
          >
            Projects
          </button>
          {selectorProjects && <div className="selector"></div>}
        </article>

        <article className="button-container">
          <button
            className="button-nav"
            onClick={() => {
              setSelectorHome(false);
              setSelectorProjects(false);
              setSelectorDescription(true);
            }}
          >
            Description
          </button>
          {selectorDescription && <div className="selector"></div>}
        </article>
      </nav>
    </>
  );
}

export default Navbar;
