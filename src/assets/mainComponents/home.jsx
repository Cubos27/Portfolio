import './mainPage.css';
import RubikCube from '../rubikCube/rubikCube';

function Home() {
  return (
    <section className="container">
      <h2 className="title">Welcome</h2>
      <p className="description">
        I'm Adriel Andrade, software developer and this is my portfolio
      </p>

      <RubikCube />
    </section>
  );
}

export default Home;
