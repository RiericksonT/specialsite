import styles from "./style.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <img
          src="https://private-user-images.githubusercontent.com/53712152/326899641-a17cb4ff-4533-488b-84bd-4f625ba60e6d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQ1MDQ0NzUsIm5iZiI6MTcxNDUwNDE3NSwicGF0aCI6Ii81MzcxMjE1Mi8zMjY4OTk2NDEtYTE3Y2I0ZmYtNDUzMy00ODhiLTg0YmQtNGY2MjViYTYwZTZkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDMwVDE5MDkzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZiMmUxYzcwMTA5MDQ2ZWZjOTE0OTc5ZmE1MTE1YTNjNDdlODg5ZTc3ZTZiNzc1MDlmNDE5NjY1MWI5YzU3Y2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5KQBWU9lM1zjeVKvJOPp3DSDt5XFUDUtlNNKKHJltzo"
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
            <a href="#">Our Future</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
