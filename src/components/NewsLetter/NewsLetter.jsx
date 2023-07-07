import "./NewsLetter.css";
import { spoon1 } from "../../assets";
const NewsLetter = () => {
  return (
    <div className="app__newsletter section__padding">
      <div className="newsletter__container">
        <div className="newsletter__heading">
          <p className="p__opensans">Newsletter</p>
          <img src={spoon1} alt="spoon__image" />
        </div>

        <h2>Subscribe to our Newsletter</h2>
        <p className="p__opensans p2">Add And Never Miss Lattest Updates!</p>

        <div className="newsletter__input">
          <input type="text" placeholder="Enter your email address" />
          <button className="custom__button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
