import React, { useEffect } from "react";
import Header from "../../components/header/header";
import TargetIcon from "../../assets/target.png";
import LocationIcon from "../../assets/location.png";
import CarouselCard from "../../components/carouselCard/carouselCard";
import "./localTrips.css";

function LocalTrips() {
  return (
    <div className="intercity-cabs-component">
      <Header>Intercity Cabs</Header>
      <div className="modal">
        <div className="modal-labels">
          <label htmlFor="from">From</label>
          <div className="input-values">
            <img className="icons" src={TargetIcon} alt="from-target" />
            <input type="text" placeholder="From" />
          </div>
          <label htmlFor="to">To</label>
          <div className="input-values">
            <img className="icons" src={LocationIcon} alt="to-location" />
            <input type="text" placeholder="To" />
          </div>
        </div>
        <CarouselCard />
      </div>
    </div>
  );
}

export default LocalTrips;
