import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/mic.png";
import ToiletIndicate from "../../assets/toilet-indication.png";
import Route from "../../assets/route-square.png";
import data from "../../data";
import "./toilets.css";

const center = { lat: 26.78226, lng: 82.177884 };

function Toilets() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredData = data.filter((item) => {
    return searchQuery.toLowerCase() === ""
      ? item
      : item.address.toLowerCase().includes(searchQuery);
  });

  return isLoaded ? (
    <div className="google-map-box">
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {/* {data.map(item => (<Marker
          key={item.id}
          position={{ lat: item.latitude, lng: item.longitude }}
        />))} */}

        {filteredData.map((item) => (
          <Marker
            key={item.id}
            position={{ lat: item.latitude, lng: item.longitude }}
          />
        ))}
        {!isMobile && (
          <div className="search-box">
            <div className="buttons">
              <button className="btns">Toilets</button>
              <button className="btns">Parking</button>
              <button className="btns">Water ATM</button>
            </div>
            <div className="input-field">
              <img src={SearchIcon} alt="search Icon" />
              {/* <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search place by name' /> */}
              <input
                onChange={handleSearchChange}
                type="text"
                placeholder="Search place by name"
              />
              <img className="mic-icon" src={MicIcon} alt="mic Icon" />
            </div>
            <h2 className="heading">Toilets Near You</h2>
            <ul className="list-items">
              {/* {data.filter((item) => { return search.toLowerCase() === '' ? item : item.address.toLowerCase().includes(search) }).map(item => (  */}
              {filteredData.map((item) => (
                <li className="item-box" key={item.id}>
                  <div className="toilet-locations">
                    <img
                      className="toilet-indication-img"
                      src={ToiletIndicate}
                      alt="Toilet Indication"
                    />
                    <div className="list-data">
                      {item.address}
                      <span className="free-label">Free</span>
                    </div>
                  </div>
                  <img className="route-image" src={Route} alt="Route Square" />
                </li>
              ))}
            </ul>
          </div>
        )}
        {isMobile ? isOpen && <div className="overlay"></div> : ""}
        {isMobile && (
          <div
            className="search-box bottom-drawer"
            style={
              isOpen
                ? { transform: "translateY(30%)" }
                : { transform: "translateY(95%)" }
            }
          >
            <button className="toggle-button" onClick={toggleBottomSheet} />

            <div className="buttons">
              <button className="btns">Toilets</button>
              <button className="btns">Parking</button>
              <button className="btns">Water ATM</button>
            </div>
            <div className="input-field">
              <img src={SearchIcon} alt="search Icon" />
              {/* <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search place by name' /> */}
              <input
                onChange={handleSearchChange}
                type="text"
                placeholder="Search place by name"
              />
              <img className="mic-icon" src={MicIcon} alt="mic Icon" />
            </div>
            <h2 className="heading">Toilets Near You</h2>
            <ul className="list-items">
              {/* {data.filter((item) => { return search.toLowerCase() === '' ? item : item.address.toLowerCase().includes(search) }).map(item => (  */}
              {filteredData.map((item) => (
                <li className="item-box" key={item.id}>
                  <div className="toilet-locations">
                    <img
                      className="toilet-indication-img"
                      src={ToiletIndicate}
                      alt="Toilet Indication"
                    />
                    <div className="list-data">
                      {item.address}
                      <span className="free-label">Free</span>
                    </div>
                  </div>
                  <img className="route-image" src={Route} alt="Route Square" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </GoogleMap>
    </div>
  ) : (
    <>
      <div>LOADING...</div>
    </>
  );
}

export default Toilets;
