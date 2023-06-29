import  { useState } from 'react';

import image5 from "../../../Assets/image5.jpg";
import image6 from "../../../Assets/image6.jpg";
import image7 from "../../../Assets/image7.jpg";
import image8 from "../../../Assets/image8.jpg";

const carouselData = [
  {
    nom: "Iphone 6",
    img: image5
  },
  {
    nom: "Iphone 10",
    img: image5
  },
  {
    nom: "Iphone 12",
    img: image5
  },
  {
    nom: "Huawaii P20",
    img: image6
  },
  {
    nom: "Huawaii P40",
    img: image6
  },
  {
    nom: "Samsung A10",
    img: image7
  },
  {
    nom: "Samsung S22",
    img: image7
  },
  {
    nom: "Samsung S23",
    img: image7
  },
  {
    nom: "Google 7Pro",
    img: image8
  },
  {
    nom: "Google 6A",
    img: image8
  },
  {
    nom: "Google 4A",
    img: image8
  },
  {
    nom: "",
    img: ""
  },
  {
    nom: "",
    img: ""
  },
  {
    nom: "",
    img: ""
  },
  {
    nom: "",
    img: ""
  },
  {
    nom: "",
    img: ""
  },
  {
    nom: "",
    img: ""
  },
  {
    nom: "",
    img: ""
  }
];

function InfosCarousel() {
  const [carousel, setCarousel] = useState(carouselData);

  const handleButtonClick = (index) => {
    const updatedCarousel = carousel.map((item, i) => {
      if (i === index) {
        return { ...item, buttonClicked: true };
      }
      return item;
    });
    setCarousel(updatedCarousel);
  };

  const handleCrossClick = (index) => {
    const updatedCarousel = carousel.map((item, i) => {
      if (i === index) {
        return { ...item, buttonClicked: false };
      }
      return item;
    });
    setCarousel(updatedCarousel);
  };

  return (
    <ul className="Cards">
      {carousel.map((item, index) => (
        <li key={index} className="Cards_content">
          {item.buttonClicked && (
            <span className="CrossButton" onClick={() => handleCrossClick(index)}>
              x
            </span>
          )}
          {!item.buttonClicked ? (
            <>
              <p className="Style_nom">{item.nom}</p>
              <img src={item.img} className="Style_img" />
              <button onClick={() => handleButtonClick(index)}>infos</button>
            </>
          ) : (
            <div>Informations supplémentaires</div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default InfosCarousel;
