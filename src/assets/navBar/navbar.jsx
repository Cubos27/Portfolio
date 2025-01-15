import { useState, useEffect } from 'react';
import './navbar.css';

function Navbar({
  selectorHome,
  setSelectorHome,
  selectorMyRoute,
  setSelectorMyRoute,
  selectorMathle,
  setSelectorMathle,
}) {
  // useEffect(() => {
  //   console.log('selectorHome: ', selectorHome);
  //   console.log('selectorProjects: ', selectorMyRoute);
  //   console.log('selectorDescription: ', selectorMathle);
  // }, [selectorHome, selectorMyRoute, selectorMathle]);

  return (
    <>
      <nav className="nav">
        <article className="button-container">
          <button
            className="button-nav"
            onClick={() => {
              setSelectorHome(true);
              setSelectorMyRoute(false);
              setSelectorMathle(false);
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
              setSelectorMyRoute(true);
              setSelectorMathle(false);
            }}
          >
            MyRoute
          </button>
          {selectorMyRoute && <div className="selector"></div>}
        </article>

        <article className="button-container">
          <button
            className="button-nav"
            onClick={() => {
              setSelectorHome(false);
              setSelectorMyRoute(false);
              setSelectorMathle(true);
            }}
          >
            Mathle
          </button>
          {selectorMathle && <div className="selector"></div>}
        </article>
      </nav>
    </>
  );
}

export default Navbar;
