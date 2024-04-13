import React from "react";
import CarImg from "../../assets/car.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselCard.css";

const data = [
  { name: "Sedan", desc: "6 seater", price: "2575" },
  { name: "Sedan", desc: "6 seater", price: "2575" },
  { name: "Sedan", desc: "6 seater", price: "2575" },
  { name: "Sedan", desc: "6 seater", price: "2575" },
  { name: "Sedan", desc: "6 seater", price: "2575" },
  { name: "Sedan", desc: "6 seater", price: "2575" },
];
function CarouselCard() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings} className="slider-container">
      {data.map((item, index) => (
        <div key={index} className="carousel-card">
          <img className="car-image" src={CarImg} alt="car-picture" />
          <div className="card-data">
            <p className="car-name">{item.name}</p>
            <p className="car-description">{item.desc}</p>
            <p className="price">₹{item.price}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default CarouselCard;
