import "./Intro.css";
import { meal } from "../../assets";

const Intro = () => {
  return (
    <div className="app__intro">
      <video src={meal} alt="Restaurant__video" loop muted autoPlay />
    </div>
  );
};

export default Intro;
