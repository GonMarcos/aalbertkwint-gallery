import Carousel from "react-bootstrap/Carousel";
import GalleryFull from "./Gallery-full";
import image01 from "../images/Artwork_007.jpg";
import image02 from "../images/Artwork_008.jpg";
import image03 from "../images/Artwork_009.jpg";
import image04 from "../images/Artwork_010.jpg";
import image05 from "../images/Artwork_011.jpg";
import image06 from "../images/Artwork_012.jpg";
import image07 from "../images/Artwork_013.jpg";
import "./layout/Gallery.css";

function CarouselFadeExample() {
  return (
    <div>
      <div className="Gallery">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={image01} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image02} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image03} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image04} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image05} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image06} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image07} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="gallery-full">
        <GalleryFull />
      </div>
    </div>
  );
}

export default CarouselFadeExample;
