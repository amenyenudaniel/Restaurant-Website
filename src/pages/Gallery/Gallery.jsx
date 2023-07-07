import "./Gallery.css";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import {
  spoon1,
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
} from "../../assets";
import { useRef, useEffect } from "react";
import VideoGallery from "../../components/VideoGallery/VideoGallery";
import AOS from "aos";
import "aos/dist/aos.css";
const galleryImages = [
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div>
      <div className="app__gallery section__padding">
        <div className="app__gallery__content">
          <p className="p__opensans">Gallery</p>
          <img src={spoon1} alt="spoon__image" />
          <h1 className="headtext__cormorant">Photo Gallery</h1>

          <small className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
            minus esse quam alias ad libero beatae. Modi, atque dolores?
          </small>
          <button className="custom__button">View More</button>
        </div>

        <div className="app__gallery__images" data-aos="flip-down">
          <div className="app__gallery__images__container" ref={scrollRef}>
            {galleryImages.map((image) => (
              <div
                className="app__gallery__image__card flex__center"
                key={image}
              >
                <img src={image} alt="gallery_image" loading="lazy"/>
                <BsInstagram className="instagram__icon" />
              </div>
            ))}
          </div>
          <div className="app__gallery__arrows">
            <BsArrowLeftShort
              className="arrow"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="arrow"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
      <VideoGallery />
    </div>
  );
};

export default Gallery;
