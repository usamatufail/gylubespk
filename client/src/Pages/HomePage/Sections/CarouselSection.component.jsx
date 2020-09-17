import React from "react";
//styles
// import "./CarouselSection.styles.scss";
//Custom Components
import Carousel from "../../../Components/Carousel/Carousel.component";
//images
// import razrImage from "../../../assets/videos/razrmt.webp";
// import trepadorImage from "../../../assets/videos/trepador.webp";
//slider data to dynamically change slides in carousel
const sliderData = [
  {
    id: 123,
    alt: "good-year-header",
    bigImage:
      "https://res.cloudinary.com/maxxispk/image/upload/w_1400/v1599729631/Product-Header-Optimized_c3cipg.webp",
    image:
      "https://res.cloudinary.com/maxxispk/image/upload/w_1400/v1599729631/Product-Header-Optimized_c3cipg.webp",
    overLayImage:
      "https://res.cloudinary.com/maxxispk/image/upload/w_200/v1599729631/Product-Header-Optimized_c3cipg.webp",
    typeText:
      "Ayesha + Marriam Pvt Ltd is the official licensee of the GoodYear Tire & Rubber Company, USA  for GoodYear Lubricants.",
  },
  // {
  //   id: 123,
  //   alt: "good-year-header2",
  //   bigImage:
  //     "https://res.cloudinary.com/maxxispk/image/upload/v1599733290/gylubricants_rvanzx.jpg",
  //   image:
  //     "https://res.cloudinary.com/maxxispk/image/upload/v1599733290/gylubricants_rvanzx.jpg",
  //   overLayImage:
  //     "https://res.cloudinary.com/maxxispk/image/upload/w_200/v1599733290/gylubricants_rvanzx.jpg",
  // },
];

const CarouselSection = () => {
  return (
    <section id="carouselSection">
      <Carousel sliderData={sliderData} />
    </section>
  );
};

export default CarouselSection;
