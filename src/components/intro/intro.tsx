import styles from "./style.module.scss";

function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.introLeft}>
        <h1 className={styles.title}>Welcome to the future</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
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
