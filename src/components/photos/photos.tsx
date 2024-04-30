import React, { useState } from "react";
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
      image: "https://picsum.photos/200/300?random=0",
      date: "14/02",
    },
    {
      index: 1,
      image: "https://picsum.photos/200/300?random=1",
      date: "02/03",
    },
    {
      index: 2,
      image: "https://picsum.photos/200/300?random=2",
      date: "28/03",
    },
    {
      index: 3,
      image: "https://picsum.photos/200/300?random=3",
      date: "03/04",
    },
    {
      index: 4,
      image: "https://picsum.photos/200/300?random=4",
      date: "22/04",
    },
    {
      index: 5,
      image: "https://picsum.photos/200/300?random=5",
      date: "01/05",
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
          <h1>Lorem Ipsun</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
