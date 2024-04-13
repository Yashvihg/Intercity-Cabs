import React from "react";
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import TravelsCard from "../../components/travelsCard/travelsCard"
import LocaltripImg from '../../assets/localTrips.png'
import CabsImg from "../../assets/cabs.png";
import IntercityImg from "../../assets/intercityCabs.png";
import DivyaAyodhya from '../../assets/divya_ayodhya.png';

const TravelsPage = () => {
  return (
    <div>
      <Header>Travels</Header>
      <img src={DivyaAyodhya} alt="divya-ayodhya-picture" style={{ width:"90%", margin: "1rem 1rem 0 1rem"}}/>
      <TravelsCard
        image={CabsImg}
        heading="Cabs"
        paraData="Book cabs for intracity travels across ayodhya city."
      />
      <TravelsCard
        image={LocaltripImg}
        heading="Local Trips"
        paraData="Book cabs for visiting 
popualar tourist places 
across ayodhya"
      />
      <TravelsCard
        image={IntercityImg}
        heading="Intercity Cabs"
        paraData="Book cabs for intercity 
travels between popular
cities across Uttar Pradesh."
      />
      <Footer />
    </div>
  );
};

export default TravelsPage;
