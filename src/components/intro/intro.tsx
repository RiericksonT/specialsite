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
          src="https://private-user-images.githubusercontent.com/53712152/326920264-63d41db3-0cb8-46da-a2ee-d1c05e30361a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTYzMjkxMTEsIm5iZiI6MTcxNjMyODgxMSwicGF0aCI6Ii81MzcxMjE1Mi8zMjY5MjAyNjQtNjNkNDFkYjMtMGNiOC00NmRhLWEyZWUtZDFjMDVlMzAzNjFhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTIxVDIyMDAxMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRjZGNjYjAzYzVjMmE4OTRhOWNlYzBlNjczNjlhNDg5ZGRhZWU0YjFiY2Q1ZmUxOTRmNjY2N2UxYjQ4Y2Q5NWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.vs3w9UebMlp292BIBYLTQqOhOCmXt1AkIAXvUkKMLeg"
          alt="Intro"
          className={styles.introImg}
        />
      </div>
    </div>
  );
}

export default Intro;
