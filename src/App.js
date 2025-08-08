import "./App.css";
import spaceImage from "./assets/space.jpg";

function App() {
  return (
    <>
      <div className="stars-bg"></div>
        <div className="container">
          <h1 className="title">Drifting Among the Stars -: Welcome to Test Branch </h1>

          <img
            src={spaceImage}
            alt="Anime space character"
            className="main-image"
          />

          <p className="description">
            Lost in the vastness of the cosmos, floating through galaxies and
            constellations — embark on a journey where imagination knows no
            boundaries.
          </p>

        <button className="cta">Start Your Journey</button>
      </div>
    </>
  );
}

export default App;