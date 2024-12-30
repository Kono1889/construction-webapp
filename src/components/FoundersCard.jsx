import React from "react";
import "./styles.css";

const FoundersCard = ({ imageUrl, altTitle, title, about }) => {
  return (
    <div className="responsive-card2">
      <div className="card-image-container2">
        <img src={imageUrl} alt={altTitle} className="card-image2" />
      </div>
      <div className="card-header2">
        <p className="card-name2">{title}</p>
        <p className="card-about2">{about}</p>
      </div>
    </div>
  );
};

export default FoundersCard;
