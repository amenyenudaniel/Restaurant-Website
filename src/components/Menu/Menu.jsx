import "./Menu.css";
import { cocktails, wines } from "../../constants/data";
import { menu, spoon1 } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div className="app__menu section__padding">
      <div className="menu__head">
        <p className="p__opensans">Menu that will fit your palatte</p>
        <img src={spoon1} alt="spoon__image" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="menu__items">
        <div className="wine__beer" data-aos="fade-up">
          <h2>Wine & Beer</h2>
          {wines.map((wine) => (
            <div className="wine__content__container" key={wine.title}>
              <div className="wine__content">
                <p>{wine.title}</p>
                <div className="wine__price">
                  <div />
                  <h6>{wine.price}</h6>
                </div>
              </div>
              <small>{wine.tags}</small>
            </div>
          ))}
        </div>
        <div className="menu__image" data-aos="fade-down">
          <img src={menu} alt="menu__image" />
        </div>
        <div className="wine__beer" data-aos="fade-up">
          <h2>Cocktails</h2>
          {cocktails.map((cocktail) => (
            <div className="wine__content__container" key={cocktail.title}>
              <div className="wine__content">
                <p>{cocktail.title}</p>
                <div className="wine__price">
                  <div />
                  <h6>{cocktail.price}</h6>
                </div>
              </div>
              <small>{cocktail.tags}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
