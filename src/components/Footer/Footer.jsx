import { gericht, spoon1 } from "../../assets";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer section__padding">
      <footer>
        <div className="footer__container">
          <h3 className="p__cormorant">Contact Us</h3>
          <p className="p__opensans">9 W 53rd ST, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 232 445 667</p>
          <p className="p__opensans">+1 212 032 038</p>
        </div>

        <div className="footer__container f1">
          <img src={gericht} alt="logo" className="logo__footer" />
          <p className="p__opensans">
            "The best way to Find Yourself is to Lose Yourself in the <br />
            Service of others"
          </p>
          <img src={spoon1} alt="spoon__image" className="spoon__footer" />
          <div className="social__icons">
            <i>
              <FaFacebook />
            </i>
            <i>
              <FaInstagram />
            </i>
            <i>
              <FaTwitter />
            </i>
          </div>
        </div>
        <div className="footer__container">
          <h3 className="p__cormorant">Working Hours</h3>
          <p className="p__opensans">Monday - Friday</p>
          <p className="p__opensans">08:00am - 12:00am</p>
          <p className="p__opensans">Saturday - Sunday</p>
          <p className="p__opensans">07:00am - 11:00am</p>
        </div>
      </footer>

      <p
        className="p__opensans"
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        2023 Gericht, All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
