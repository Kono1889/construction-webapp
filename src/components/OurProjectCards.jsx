import React from "react";
import "./styles.css";

const OurProjectCards = ({ title, date, category, imageUrl }) => {
  return (
    <div className="responsive-card">
      <div className="card-header">
        <p className="card-title">{title}</p>
        <p className="card-date">{date}</p>
      </div>
      <div className="card-image-container">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-footer">
        <p className="card-category">{category}</p>
      </div>
    </div>
  );
};

export default OurProjectCards;


