import React from "react";
import "./LifeTimeSection.styles.scss";

const LifeTimeSection = () => {
  return (
    <section id="lifetime-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <img
                // width="1202"
                // height="273"
                src="https://www.gylubricants.com/wp-content/uploads/2020/01/GY_LifetimeGuarantee_logo_WF_Yellow.png"
                class="attachment-full size-full"
                alt=""
                srcset="https://www.gylubricants.com/wp-content/uploads/2020/01/GY_LifetimeGuarantee_logo_WF_Yellow.png 1202w, https://www.gylubricants.com/wp-content/uploads/2020/01/GY_LifetimeGuarantee_logo_WF_Yellow-300x68.png 300w, https://www.gylubricants.com/wp-content/uploads/2020/01/GY_LifetimeGuarantee_logo_WF_Yellow-1024x233.png 1024w, https://www.gylubricants.com/wp-content/uploads/2020/01/GY_LifetimeGuarantee_logo_WF_Yellow-768x174.png 768w"
                sizes="(max-width: 1202px) 100vw, 1202px"
              />
              <h3 style={{ textAlign: "left" }}>Our Promise</h3>
              <p style={{ textAlign: "left" }}>
                All of Goodyear Lubricants products are competitively priced
                while achieving maximum industry performance. We are so
                confident in the performance of our products that we offer a
                lifetime engine protection guarantee allowing you to drive your
                car with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeTimeSection;
