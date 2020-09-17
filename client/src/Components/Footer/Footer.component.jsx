import React from "react";
import "./Footer.styles.scss";
//react-router-dom Components
import { withRouter } from "react-router-dom";
const Footer = (props) => {
  const currentRoute = props.location.pathname;
  const checkIfAdmin = currentRoute.includes("/admin");
  return (
    <>
      {checkIfAdmin ? (
        <></>
      ) : (
        <section id="footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <img
                    //   width="300"
                    //   height="85"
                    src="https://www.gylubricants.com/wp-content/uploads/2020/01/Goodyear_RIGHTSIDE_LUBE_Lockup_RGB-YELLOW-WHITE-300x85.png"
                    className="attachment-medium size-medium"
                    alt=""
                    srcSet="https://www.gylubricants.com/wp-content/uploads/2020/01/Goodyear_RIGHTSIDE_LUBE_Lockup_RGB-YELLOW-WHITE-300x85.png 300w, https://www.gylubricants.com/wp-content/uploads/2020/01/Goodyear_RIGHTSIDE_LUBE_Lockup_RGB-YELLOW-WHITE-768x218.png 768w, https://www.gylubricants.com/wp-content/uploads/2020/01/Goodyear_RIGHTSIDE_LUBE_Lockup_RGB-YELLOW-WHITE.png 843w"
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                  <div
                    className="row"
                    style={{ color: "white", marginTop: "2%" }}
                  >
                    <div className="col-12">
                      <p>
                        Address: 4th Floor, Legacy Tower, Kohinoor City, FSD
                      </p>
                    </div>
                    <div className="col-12">
                      <p>Phone: +92-311-7700158</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default withRouter(Footer);
