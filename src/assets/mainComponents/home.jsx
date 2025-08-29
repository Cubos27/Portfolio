import './mainPage.css';
import RubikCube from '../rubikCube/rubikCube';

function Home() {
  return (
    <section className="container">
      <h2 className="title">Welcome</h2>
      <p className="description">
        I'm Adriel Andrade, FullStack developer and I'm ready to make your new amazing wesite
      </p>

      <RubikCube />
    </section>
  );
}

export default Home;
