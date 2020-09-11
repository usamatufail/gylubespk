import React from "react";
import "./LetsConnectSection.styles.scss";

const LetsConnectSection = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 pd-0">
            <div class="img-good">
              <img
                alt="contact-card"
                // class="lazy loaded"
                width="100%"
                // data-ll-status="loaded"
                src="https://www.goodyearlubricants.in/frontend/assets/img/imggg.jpg"
              />
            </div>
          </div>
          <div className="col-sm-6 black-yellow">
            <div class="text-cont">
              <h1>Let's Connect</h1>
              <p>
                For additional information about our products and pricing, get
                in touch with us to learn more about the quality and the
                opportunities you’ll gain from working with the Goodyear name.{" "}
              </p>
              <a
                href="https://www.goodyearlubricants.in/contact"
                class="warranty-btn mt-1"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsConnectSection;
