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
        <h1>Parabéns!</h1>
        <p>
          Nem sei como começar a expressar tudo que sinto por você, mas vou
          tentar. Primeiro, quero agradecer a Deus por ter colocado você na
          minha vida. Você é a melhor coisa que me aconteceu, e hoje, o maior
          presente sou eu quem recebe, por ter você ao meu lado. Ter você comigo
          é um presente diário que recebo de Deus! Que você aproveite muito o
          seu dia, que ele seja repleto de alegrias, amor, paz, saúde e muitas
          bênçãos. Que você continue sendo essa pessoa maravilhosa, cheia de luz
          e bondade, que contagia todos ao seu redor com a sua alegria. Espero
          que esse seja o primeiro de muitos aniversários que passaremos juntos,
          e que eu possa estar ao seu lado em todos eles. Eu te amo muito,
          muito, muito! Que Deus continue te abençoando e te protegendo sempre.
          Parabéns, meu amor!
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
