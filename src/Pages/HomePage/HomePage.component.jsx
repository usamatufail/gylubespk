import React from "react";
import "./HomePage.styles.scss";
//Sections for HomePage
import CarouselSection from "./Sections/CarouselSection.component";
import DescriptionSection from "./Sections/DescriptionSection.component";
import LogoAndTagLineSection from "./Sections/LogoAndTagLineSection.component";
import LifeTimeSection from "./Sections/LifeTimeSection.component";
import LetsConnectSection from "./Sections/LetsConnectSection.component";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <CarouselSection />
      <DescriptionSection />
      <LogoAndTagLineSection />
      <LifeTimeSection />
      <LetsConnectSection />
    </div>
  );
};

export default HomePage;
