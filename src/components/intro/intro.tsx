import styles from "./style.module.scss";

function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.introLeft}>
        <h1 className={styles.title}>Feliz aniversário minha princesa!</h1>
        <p className={styles.text}>
          Que seu dia seja repleto de alegrias, apesar de você estar na
          faculdade, aproveita muito, pois você merece o melhor dia de todos. Te
          amo muito! 22 aninhos tais ficando velha, hein?!
        </p>
      </div>
      <div className={styles.introRight}>
        <img
          src="/images/body-img.png"
          alt="Intro"
          className={styles.introImg}
        />
      </div>
    </div>
  );
}

export default Intro;
