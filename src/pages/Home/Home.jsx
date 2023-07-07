import "./Home.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import Intro from "../../components/Intro/Intro";
import Menu from "../../components/Menu/Menu";
import { welcome, spoon1 } from "../../assets";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="header ">
      <header className="section__padding">
        <div className="app__header" data-aos="fade-up">
          <div className="app__header-content">
            <SubHeading title="chase the new flavor" />

            <h1 className="headtext__cormorant">The Key To Fine Dinning</h1>
            <p className="p__opensans p1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              voluptates sapiente cupiditate, ex maxime quis laboriosam itaque
              aliquam fugit similique, quam dolorem obcaecati sed voluptate.
            </p>

            <button className="custom__button header-btn">Explore More</button>
          </div>
          <div className="header__image" data-aos="fade-down">
            <img src={welcome} alt="Home__image" loading="lazy"/>
          </div>
        </div>
      </header>

      <div className="mobile__buttons section__padding">
        <button className="custom__button" onClick={() => setSignUp(true)}>
          Sign Up
        </button>
        <button className="custom__button" onClick={() => setLogIn(true)}>
          Log In
        </button>
      </div>

      {logIn && (
        <div className="login section__padding slide-bottom">
          <RiCloseLine
            className="close__login"
            onClick={() => setLogIn(false)}
          />
          <p className="p__cormorant">Log In</p>
          <img src={spoon1} alt="spoon" />
          <div className="login__container">
            <p className="login__w">We are very happy to have you back!</p>
            <form className="login__form">
              <h6>Log In</h6>

              <p className="p__opensans">Enter Username: </p>
              <input type="text" placeholder="Username..." />
              <p className="p__opensans">Enter Password: </p>
              <input
                type="password"
                placeholder="Password..."
                className="last__input"
              />
              <button
                className="custom__button"
                onClick={() => setLogIn(false)}
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      )}

      {signUp && (
        <div className="login section__padding slide-bottom">
          <RiCloseLine
            className="close__login"
            onClick={() => setSignUp(false)}
          />
          <p className="p__cormorant">Sign Up</p>
          <img src={spoon1} alt="spoon" />
          <div className="login__container">
            <p className="login__w">Welcome to Gericht Restaurant!</p>
            <form className="login__form">
              <h6>Sign Up</h6>

              <p className="p__opensans">Enter Username: </p>
              <input type="text" placeholder="Username..." />
              <p className="p__opensans">Enter Password: </p>
              <input
                type="password"
                placeholder="Password..."
                className="last__input"
              />

              <p className="p__opensans">Confirm Password: </p>
              <input
                type="password"
                placeholder="Password..."
                className="last__input"
              />
              <button
                className="custom__button"
                onClick={() => setSignUp(false)}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
      <Intro />
      <Menu />
      <NewsLetter />
    </div>
  );
};

export default Home;
