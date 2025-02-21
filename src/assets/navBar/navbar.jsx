import { useState, useEffect } from 'react';
import './navbar.css';

function Navbar({
  selectorNav,
  setSelectorNav,
}) {
  return (
    <>
      <nav className="nav">
        <article className="button-container">
          <button
            className="button-nav"
            onClick={() => { setSelectorNav('Home') }}
          >
            Home
          </button>
          {selectorNav === 'Home' && <div className="selector"></div>}
        </article>

        <article className="button-container">
          <button
            className="button-nav"
            onClick={() => { setSelectorNav('MyRoute') }}
          >
            MyRoute
          </button>
          {selectorNav === 'MyRoute' && <div className="selector"></div>}
        </article>

        <article className="button-container">
          <button
            className="button-nav"
            onClick={() => { setSelectorNav('Mathle') }}
          >
            Mathle
          </button>
          {selectorNav === 'Mathle' && <div className="selector"></div>}
        </article>

        <article className="button-container">
          <button
            className="button-nav"
            onClick={() => { setSelectorNav('Sites') }}
          >
            Sites
          </button>
          {selectorNav === 'Sites' && <div className="selector"></div>}
        </article>
      </nav>
    </>
  );
}

export default Navbar;
