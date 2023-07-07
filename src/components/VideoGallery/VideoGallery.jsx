import "./VideoGallery.css";
import { meal2, meal3, meal4, meal5 } from "../../assets";
import { useRef, useEffect } from "react";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";
import "aos/dist/aos.css";
import AOS from "aos";

const videoGallery = [meal2, meal5, meal3, meal4];
const VideoGallery = () => {
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
    <div className="app__videogallery section__padding">
      <div className="app__videogallery__content" data-aos="fade-left">
        <h1 className="headtext__cormorant">Video Gallery</h1>
        <small className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam
          minus esse quam alias ad libero beatae. Modi, atque dolores?
        </small>
        <button className="custom__button">View More</button>
      </div>

      <div className="app__gallery__videos" data-aos="flip-up">
        <div className="app__gallery__videos__container" ref={scrollRef}>
          {videoGallery.map((video) => (
            <div
              className="app__gallery__videos__card flex__center"
              key={video}
            >
              <video src={video} loop muted autoPlay alt="gallery_video" />
              <BsInstagram className="instagram__icon" />
            </div>
          ))}
        </div>
        <div className="app__video__arrows">
          <BsArrowLeftShort className="arrow" onClick={() => scroll("left")} />
          <BsArrowRightShort
            className="arrow"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
