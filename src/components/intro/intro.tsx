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
          src="https://private-user-images.githubusercontent.com/53712152/326920264-63d41db3-0cb8-46da-a2ee-d1c05e30361a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQ1MDQ0NDUsIm5iZiI6MTcxNDUwNDE0NSwicGF0aCI6Ii81MzcxMjE1Mi8zMjY5MjAyNjQtNjNkNDFkYjMtMGNiOC00NmRhLWEyZWUtZDFjMDVlMzAzNjFhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDMwVDE5MDkwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZmMGM0NzI1YjljODBhZTJlMGQ4MzNiZjhhYjQ4ZDU1NzQ2N2I5ZDk1YTIxNjk5Y2E5YTYxZmJiYmRkNDIzMzEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.6yw9N2czP4tQP6KLCFCp0KmwWbxGHROtNDjR39yLNj0"
          alt="Intro"
          className={styles.introImg}
        />
      </div>
    </div>
  );
}

export default Intro;
