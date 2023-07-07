import { useEffect } from "react";
import "./Contact.css";
import { findus, spoon1 } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])
  return (
    <div>
      <div className="app__contact section__padding">
        <div className="app__contact__content" data-aos="fade-up">
          <p className="p__opensans">Contact</p>
          <img src={spoon1} alt="spoon__image" />
          <h2 className="headtext__cormorant">Find Us</h2>
          <p className="p__opensans p4">
            Lane Ends Bungalow, Whatscroft Hall Lane, Rudheath, CW9 RE6
          </p>

          <p className="p5">Opening Hours</p>
          <p className="p__opensans p6">Mon-Fri: 07:am - 11pm</p>
          <p className="p__opensans p7">Sat-Sun: 09:am - 10pm</p>

          <button className="custom__button">Vist Us</button>
        </div>
        <div className="app__contact__image" data-aos="fade-down">
          <img src={findus} alt="contact__image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
