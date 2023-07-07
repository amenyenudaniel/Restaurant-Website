import "./Awards.css";
import { awards } from "../../constants/data";
import { spoon1, laurels } from "../../assets";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Awards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="app__awards section__padding">
      <div className="laurels__content">
        <p className="p__opensans">Awards & Recognition</p>
        <img src={spoon1} alt="spoon__image" loading="lazy"/>
        <h1 className="headtext__cormorant h11">Our Laurels</h1>

        <div className="laurels__container" data-aos="flip-up">
          {awards.map((award) => (
            <div className="laurels" key={award.title}>
              <img src={award.imgUrl} alt="award__image" loading="lazy"/>
              <div className="award__content">
                <h6>{award.title}</h6>
                <p className="p__opensans">{award.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="laurels__image" data-aos="zoom-in">
        <img src={laurels} alt="laurels__image" loading="lazy"/>
      </div>
    </div>
  );
};

export default Awards;
