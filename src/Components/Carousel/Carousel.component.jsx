import React from "react";
//React Reveal Library Elements
// import { Fade } from "react-reveal";
//React-Typing-Animation for Typing Effect
import Typing from "react-typing-animation";
//React Slick Library Elements
import Slider from "react-slick";
//Link Component of React Router DOM
// import { Link } from "react-router-dom";
//Slick stylesheets
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProgressiveImage from "react-progressive-graceful-image";
//styles
import "./Carousel.styles.scss";

export default class CarouselComponent extends React.Component {
  render() {
    //Carousel Settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 5000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 650,
          settings: {
            arrows: false,
          },
        },
      ],
    };
    const listOfCategories = [
      "MotorBike / Scooter Engine Oil",
      "CNG Light Vehicle Engine Oil",
      "CNG Car/Heavy Vehicle Engine Oil",
      "Car / Suv / Muv Engine Oil",
      "Tractor Engine Oil",
      "Universal Tractor Transmission Oil",
      "Truck / Bus Engine Oil",
      "Automatic Transmission Fluid",
      "Diesel Exhaust Fluid",
      "Coolant",
      "Brake Fluid",
      "Gear Oil",
      "Greases",
      "Hydraulic Oil",
      "Shock Absorber Oil",
    ];
    return (
      <div>
        <Slider {...settings}>
          {this.props.sliderData.map((data) => {
            return (
              <div data-index={data.id} key={data.id}>
                <div className="video-slide-wrapper">
                  <ProgressiveImage
                    className="video-slide"
                    src={data.bigImage}
                    placeholder={data.overLayImage}
                    alt={data.alt}
                  >
                    {(src) => (
                      <img
                        src={src}
                        alt="an alternative text"
                        className="video-slide"
                      />
                    )}
                  </ProgressiveImage>
                  <ProgressiveImage
                    className="image-slide"
                    placeholder={data.overLayImage}
                    src={data.image}
                    alt={data.alt}
                  >
                    {(src) => (
                      <img
                        src={src}
                        alt="an alternative text"
                        className="image-slide"
                      />
                    )}
                  </ProgressiveImage>
                  <div className="carousel-slide__content">
                    <span className="typing-header">We deal in </span>
                    <Typing cursorClassName="cursor-animated">
                      <span>
                        {listOfCategories.map((category) => {
                          return (
                            <span>
                              <h3 className="category-header">{category}</h3>
                              <Typing.Delay ms={2000} />
                              <Typing.Backspace count={category.length} />
                            </span>
                          );
                        })}
                        <h3 className="category-header">
                          ALL KIND OF LUBRICANTS.
                        </h3>
                      </span>
                    </Typing>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
