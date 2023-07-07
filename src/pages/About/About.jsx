import "./About.css";
import Awards from "../../components/Awards/Awards";
import { knife, G, spoon1 } from "../../assets";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);
  return (
    <div>
      <div className="about section__padding">
        <div className="app__about ">
          <div className="app__about__content1" data-aos="fade-down">
            <h1 className="headtext__cormorant">About Us</h1>
            <img src={spoon1} alt="spoon__image" className="about__spoon" loading="lazy" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              modi vero cumque quo?
            </p>
            <button className="custom__button">Know More</button>
          </div>
          <div className="knife__image" data-aos="fade-up">
            <img src={knife} alt="knife__image" loading="lazy" />
          </div>
          <div className="app__about__content2" data-aos="fade-down">
            <h1 className="headtext__cormorant">Our History</h1>
            <img src={spoon1} alt="spoon__image" className="about__spoon" loading="lazy" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              modi vero cumque quo?
            </p>
            <button className="custom__button">Know More</button>
          </div>
        </div>

        <div className="g__image">
          <img src={G} alt="G__image" loading="lazy" />
        </div>
      </div>
      <Awards />
    </div>
  );
};

export default About;
