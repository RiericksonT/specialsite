import { useState } from "react";
import style from "./style.module.scss"; // Estilos CSS do carrossel

// Componente de cartas
const Card = ({
  index,
  isActive,
  image,
  date,
}: {
  index: number;
  isActive: number;
  image: string;
  date: string;
}) => {
  const cardClassName = `${style.card} ${
    index === isActive ? style.active : ""
  }`;

  const distance = Math.abs(index - isActive);
  const scale = 0.8 + 0.1 * (1 - distance * 0.1);
  const rotation = (isActive - index) * 20;

  const cardStyle = {
    transform: `scale(${scale}) rotate(${rotation}deg)`,
  };

  return (
    <div className={cardClassName} style={cardStyle}>
      <img src={image} alt="Card" />
      <h3>{date}</h3>
    </div>
  );
};
// Componente de carrossel
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const cards = [
    {
      index: 0,
      image:
        "https://github.com/RiericksonT/specialsite/assets/53712152/7fcfc612-1a64-475d-8cef-c5a879035af6",
      date: "24/03",
    },
    {
      index: 1,
      image:
        "https://github.com/RiericksonT/specialsite/assets/53712152/054b87e7-1968-46d1-b949-519d99f96c47",
      date: "25/03",
    },
    {
      index: 2,
      image:
        "https://github.com/RiericksonT/specialsite/assets/53712152/6c14fcb8-6ebe-49f0-a22b-38b7966359d0",
      date: "24/03",
    },
    {
      index: 3,
      image:
        "https://github.com/RiericksonT/specialsite/assets/53712152/9848e5e8-9741-433a-940d-903086b23d5d",
      date: "21/04",
    },
    {
      index: 4,
      image:
        "https://github.com/RiericksonT/specialsite/assets/53712152/4548db28-cc7d-46d0-8915-7951c303b54c",
      date: "17/02",
    },
  ]; // Gerar array de cartas (neste caso, 5 cartas)

  return (
    <div className={style.carouselContainer}>
      <div className={style.carousel}>
        {cards.map((index) => (
          <Card
            key={index.index}
            index={index.index}
            isActive={activeIndex}
            image={index.image}
            date={index.date}
          />
        ))}
        <button className={style.prevButton} onClick={prevCard}>
          Anterior
        </button>
        <button className={style.nextButton} onClick={nextCard}>
          Próximo
        </button>
        <div className={style.texts}>
          <h1>Cada momento ao seu lado é único!</h1>
          <h2>E eu quero passar muitos outros momentos ao seu lado. Te amo!</h2>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
