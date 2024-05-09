import styles from "./style.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#photos">Photos</a>
          </li>
          <li>
            <a href="#letter">Some Text</a>
          </li>
          <li>
            <a href="#sky">The sky</a>
          </li>
          <li>
            <a href="#quiz">Quiz</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
