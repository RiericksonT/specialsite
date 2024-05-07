import style from "./style/App.module.scss";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Photos from "./components/photos/photos";
import SkyView from "./components/sky/sky";
import Quiz from "./components/quiz/quiz";

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
      <div className={style.theSky} id="sky">
        <SkyView />
      </div>
      <div className={style.quiz} id="quiz">
        <Quiz />
      </div>
    </>
  );
}

export default App;
