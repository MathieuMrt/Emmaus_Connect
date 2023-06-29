import carousel from "./InfosCarousel";

function InfosCaroussel() {
  return (
    <ul className="Cards">
    {carousel.map((carousel, index) => (
  
      <li key={index} className="Cards_content">
        <p className="Style_nom"> {carousel.nom}</p>
        <img src={carousel.img} className="Style_img" />
      </li>
    ))}
      
    
    </ul>
  );
}

export default InfosCaroussel;