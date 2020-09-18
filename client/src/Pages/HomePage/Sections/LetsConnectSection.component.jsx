import React from "react";
import "./LetsConnectSection.styles.scss";

import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const LetsConnectSection = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <Fade left>
            <div className="col-sm-6 pd-0">
              <div class="img-good">
                <img
                  alt="contact-card"
                  // class="lazy loaded"
                  width="100%"
                  // data-ll-status="loaded"
                  src="https://res.cloudinary.com/maxxispk/image/upload/v1600414347/imggg_nmny74.jpg"
                />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="col-sm-6 black-yellow">
              <div class="text-cont">
                <h1>Let's Connect</h1>
                <p>
                  For additional information about our products and pricing, get
                  in touch with us to learn more about the quality and the
                  opportunities you’ll gain from working with the Goodyear name.{" "}
                </p>
                <Link to="/contact" class="warranty-btn mt-1">
                  Contact Us
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default LetsConnectSection;
