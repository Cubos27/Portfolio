import React from 'react';
import mathleImage from '/projects/mathle_rush.jpeg'

function Mathle() {
  return (
    <section className="container">
      <h2 className="title">Mathle</h2>
      <p className="description">
      What is Mathle? <br />
      Mathle is an academic project I helped to design and develop. <br /><br />

      An intuitive digital platform dedicated to transforming how students engage with mathematics and related disciplines. 
      By offering interactive lessons, practice problems, and personalized learning tools, Mathle empowers users to master complex concepts 
      at their own pace.
      </p>

      <div className="img-container">
        <img src={mathleImage} alt="Not found" />
      </div>
    </section>
  );
}

export default Mathle;
