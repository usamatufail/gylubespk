import React from "react";
import "./DescriptionSection.styles.scss";

import Fade from "react-reveal/Fade";

class DescriptionSection extends React.Component {
  render() {
    return (
      <section id="description-section">
        <div className="pd abt">
          <div className="container">
            <div className="row">
              <Fade left cascade>
                <div className="col-lg-12 mb-2 text-center">
                  <h4 style={{ color: "#fff200", fontWeight: "400" }}>
                    Goodyear lubricants has developed a wide range of engine
                    oils, gear oils, hydraulic oils, greases and specialities
                    for bikes, scooters, cars, light & heavy commercial vehicles
                    & tractors. Blended with our advanced additive technologies.
                    Every product is designed to enhance performance,
                    reliability & longevity for your use.
                  </h4>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DescriptionSection;
