import React from "react";
import PropTypes from "prop-types";

import "./card.css";

function Card({ imageSource, title, text, skills }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">{text ? text : "Text"}</p>
        <p className="card-text text-secondary">{skills ? skills : "Skill"}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  skill: PropTypes.string,
  imageSource: PropTypes.string,
};

export default Card;
