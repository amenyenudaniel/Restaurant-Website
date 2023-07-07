import "./Navbar.css";
import { gericht, spoon1 } from "../../assets";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Hamburger } from "phosphor-react";
import { Close } from "@mui/icons-material";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [selected, setSelected] = useState("Home");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <>
      <div className="app__navbar">
        <nav className="flex__between">
          <Link to="/">
            <img
              src={gericht}
              alt="logo"
              className="logo"
              onClick={() => setSelected("Home")}
            />
          </Link>
          <div className="app__links__container">
            <Link to="/">
              <li
                onClick={() => setSelected("Home")}
                style={{ color: selected === "Home" && "var(--color-golden)" }}
              >
                Home
              </li>
            </Link>
            <Link to="/About">
              <li
                onClick={() => setSelected("About")}
                style={{ color: selected === "About" && "var(--color-golden)" }}
              >
                About
              </li>
            </Link>
            <Link to="/Gallery">
              <li
                onClick={() => setSelected("Gallery")}
                style={{
                  color: selected === "Gallery" && "var(--color-golden)",
                }}
              >
                Gallery
              </li>
            </Link>
            <Link to="/Blog">
              <li
                onClick={() => setSelected("Blog")}
                style={{ color: selected === "Blog" && "var(--color-golden)" }}
              >
                Blog
              </li>
            </Link>
            <Link to="/Contact">
              <li
                onClick={() => setSelected("Contact")}
                style={{
                  color: selected === "Contact" && "var(--color-golden)",
                }}
              >
                Contact
              </li>
            </Link>

            <button
              className="custom__button btn1"
              onClick={() => setSignUp(true)}
            >
              Sign Up
            </button>
            <button className="custom__button" onClick={() => setLogIn(true)}>
              Log In
            </button>
          </div>

          <i className="open" title="Menu" onClick={() => setToggleMenu(true)}>
            <Hamburger />
          </i>
        </nav>

        <div className="mobile__menu">
          {toggleMenu && (
            <div className="mobile__links__container slide-bottom">
              <i
                className="close"
                title="Close Menu"
                onClick={() => setToggleMenu(false)}
              >
                <Close />
              </i>

              <div className="mobile__links">
                <Link to="/">
                  <li onClick={() => setToggleMenu(false)}>Home</li>
                </Link>
                <Link to="/About">
                  <li onClick={() => setToggleMenu(false)}>About</li>
                </Link>
                <Link to="/Gallery">
                  <li onClick={() => setToggleMenu(false)}>Gallery</li>
                </Link>
                <Link to="/Blog">
                  <li onClick={() => setToggleMenu(false)}>Blog</li>
                </Link>
                <Link to="/Contact">
                  <li onClick={() => setToggleMenu(false)}>Contact</li>
                </Link>
              </div>
            </div>
          )}
        </div>
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
    </>
  );
};

export default Navbar;
