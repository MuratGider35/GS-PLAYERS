import React from "react";
import "./Main.css";

const Main = ({ id, name, position, age, image }) => {
  return (
    <div className="player">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h1>{name}</h1>
        <p>{position}</p>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default Main;
