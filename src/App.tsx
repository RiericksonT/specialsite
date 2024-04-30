import style from "./style/App.module.scss";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Photos from "./components/photos/photos";

function App() {
  return (
    <>
      <Header />
      <div className={style.intro} id="home">
        <Intro />
      </div>
      <div className={style.photos} id="photos">
        <Photos />
      </div>
      <div className={style.letter} id="letter">
        <h1>Letter</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          malesuada, arcu nec fermentum ultricies, nunc justo ultricies nunc,
          eget ultricies purus nisl sit amet nunc. Sed sit amet orci nec sapien.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
          amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,
          consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur
          adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing
          elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
          ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </>
  );
}

export default App;
