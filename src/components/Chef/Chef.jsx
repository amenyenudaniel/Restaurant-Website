import "./Chef.css";
import { chef, quote, sign, spoon1 } from "../../assets";
const Chef = () => {
  return (
    <div className="app__chef section__padding">
      <div className="app__chef__image">
        <img src={chef} alt="chef__image" />
      </div>

      <div className="app__chef__content">
        <p className="p__opensans">Chef's Word</p>
        <img src={spoon1} alt="spoon__image" />
        <h2 className="headtext__cormorant">What We Believe In</h2>

        <div className="quote">
          <img src={quote} alt="quote__image" />
          <p className="ppp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <p className="ppp p3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nisi
          deserunt expedita, mollitia quia cum aliquam eligendi officiis magni
          dolore accusantium sequi possimus.
        </p>

        <div className="chef__name">
          <p>Kelvin Luo</p>
          <small>Chef & Founder</small>
        </div>

        <img src={sign} alt="chef__signature" className="signature" />
      </div>
    </div>
  );
};

export default Chef;
