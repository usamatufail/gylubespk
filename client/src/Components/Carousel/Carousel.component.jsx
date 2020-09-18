import React from "react";
//React Reveal Library Elements
// import { Fade } from "react-reveal";
//React-Typist for Typing Effect
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import "react-typist/dist/Typist.css";
//React Slick Library Elements
import Slider from "react-slick";
//Link Component of React Router DOM
// import { Link } from "react-router-dom";
//Slick stylesheets
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProgressiveImage from "react-progressive-graceful-image";
//react reveal animations
import Flip from "react-reveal/Flip";
//styles
import "./Carousel.styles.scss";
//redux
import { connect } from "react-redux";

class CarouselComponent extends React.Component {
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
    const listOfCategories = this.props.categories.map(
      (category) => category.title
    );
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
                  {listOfCategories.length !== 0 ? (
                    <Flip right cascade>
                      <div className="carousel-slide__content">
                        <span className="typing-header">We deal in</span>
                        {/* <Typist> */}
                        <span>
                          <TypistLoop interval={200}>
                            {listOfCategories.map((text) => (
                              <Typist key={text} startDelay={200}>
                                <h3 className="category-header">{text}</h3>
                              </Typist>
                            ))}
                          </TypistLoop>
                        </span>
                      </div>
                    </Flip>
                  ) : null}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps)(CarouselComponent);
