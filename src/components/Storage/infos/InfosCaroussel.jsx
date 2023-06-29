import carousel from "./InfosCarousel";

function InfosCaroussel() {
  return (
    <div className="Cards">
    {carousel.map((carousel) => (
  
      <><p className="Style_nom"> {carousel.nom}</p><img src={carousel.img} className="Style_img"></img></>
    ))}
      
    
    </div>
  );
}

export default InfosCaroussel;