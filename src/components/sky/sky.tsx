import Starfield from "react-starfield";
import style from "./style.module.scss";

function SkyView() {
  return (
    <div className={style.sky}>
      <Starfield
        starCount={8000}
        starColor={[255, 255, 255]}
        speedFactor={0.02}
        backgroundColor="black"
      />
      <h1>How the sky was the day I kissed you!</h1>
      <div className={style.skyImage}>
        <img
          src="https://apod.nasa.gov/apod/image/2402/RosetteCone_Bernard_5398.jpg"
          alt="sky"
        />
        <h2>Rosette Nebula and Cone Nebula in 14/02/2024.</h2>
      </div>
    </div>
  );
}

export default SkyView;
