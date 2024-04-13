import React from "react";
// import CabsImg from "../../assets/cabs.png";
import './travelsCard.css';

function TravelsCard({image, heading, paraData}) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt='card-pictures' />
      <div className="card-data">
        <h3 className="card-data_header">{heading}</h3>
        <p className="card-data_paragraph">
          {paraData}
        </p>
      </div>
    </div>
  );
}

export default TravelsCard;
