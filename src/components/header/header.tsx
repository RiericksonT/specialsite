import styles from "./style.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <img
          src="https://private-user-images.githubusercontent.com/53712152/326899641-a17cb4ff-4533-488b-84bd-4f625ba60e6d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTYzMjg3OTgsIm5iZiI6MTcxNjMyODQ5OCwicGF0aCI6Ii81MzcxMjE1Mi8zMjY4OTk2NDEtYTE3Y2I0ZmYtNDUzMy00ODhiLTg0YmQtNGY2MjViYTYwZTZkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTIxVDIxNTQ1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQyYTU4ZmM2MjFlNzVmMDdmOGI1NTliMjM1NmQ3ZmNlNmUzM2IxMmE5NDQzYTQ4ZGExY2QzYmU5NjBlNTAxYjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ar3yaR5oYL9TR1i10gTwvM8RV3tVc2e6jDQGHi_Dr2g"
          alt="Logo"
          className={styles.logo}
        />
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
