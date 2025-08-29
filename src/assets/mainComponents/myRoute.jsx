import React from 'react';
import img from '/projects/mapa.jpg'

function MyRoute() {
  return (
    <section className="container">
      <h2 className="title">MyRoute</h2>
      <p className="description">
      I developed MyRoute as a school project. <br /><br />

      A dynamic mobile application designed to revolutionize public transportation 
      navigation in Guadalajara. The app integrates all city bus routes into an interactive, 
      user-friendly map, empowering commuters to visualize real-time transit options.
      </p>

      <div className="img-container-myroute">
        <img src={img} alt="Not found" />
      </div>
    </section>
  );
}

export default MyRoute;
