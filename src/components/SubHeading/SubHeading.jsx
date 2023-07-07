import React from "react";
import "./SubHeading.css";
import { spoon1 } from "../../assets";
const SubHeading = ({ title }) => {
  return (
    <div className="subheading">
      <p className="p__opensans">{title}</p>
      <img src={spoon1} alt="spoon__image" />
    </div>
  );
};

export default SubHeading;
