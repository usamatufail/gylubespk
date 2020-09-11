import React from "react";
import "./AboutPage.styles.scss";
//Custom components
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb.component";

const linksForBreadcrumb = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
];

const AboutPage = () => {
  return (
    <>
      <Breadcrumb links={linksForBreadcrumb} />
      <div className="about-page__container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <article className="article-body">
                <div
                  style={{
                    textAlign: "center",
                    lineHeight: "28px",
                    fontSize: "18px",
                  }}
                >
                  <b>
                    AYESHA + MARRIAM PVT LTD IS THE OFFICIAL LICENSEE OF THE
                    GOODYEAR TIRE &amp; RUBBER COMPANY,&nbsp;USA&nbsp;
                  </b>
                  <img
                    src="https://www.goodyearlubricants.in/upload/general/adp-gallery5f4906a7f0082.png"
                    style={{ width: "21.1719px", height: "16.467px" }}
                    alt="USA-flag"
                  />
                  <b> FOR&nbsp;GOODYEAR LUBRICANTS.</b>
                </div>
                {/* Line Break Start */}
                <div>
                  <b>
                    <br />
                  </b>
                </div>
                {/* Line Break End */}
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://www.goodyearlubricants.in/upload/general/adp-gallery5ed66ac41cc89.png"
                    alt="good-year-logo"
                    width="100%"
                  />
                  <b>
                    <br />
                  </b>
                </div>
                {/* Line Break Start */}
                <div>
                  <b>
                    <br />
                  </b>
                </div>
                {/* Line Break End */}
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "20px",
                    lineHeight: "28px",
                  }}
                >
                  <h2 style={{ color: "#fff" }}>
                    THE OFFICIAL LICENSING COLLABORATION BETWEEN THE GOODYEAR
                    TIRE &amp; RUBBER COMPANY &amp; AYESHA + MARRIAM PVT LTD IN
                    PAKISTAN.
                  </h2>
                  <h2>
                    <br />
                  </h2>
                  <p>
                    The Goodyear Tire &amp; Rubber Company and Ayesha + Marriam
                    Pvt Ltd are excited to announce the agreement with the
                    launch of a new line of engine oil in Pakistan. The
                    collaboration between the two companies is a natural fit.
                    Goodyear is the world’s oldest producer of rubber and a
                    household name in the world of tires, as well as the
                    automotive industry. In Pakistan, Ayesha + Marriam Pvt Ltd
                    is a key player in the lubricants industry.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Goodyear is one of the world's largest tire companies. It
                    employs approximately 63,000 people and manufactures its
                    products in 46 facilities in 21 countries around the world.
                    Its two Innovation Centers in Akron, Ohio and Colmar-Berg,
                    Luxembourg strive to develop state-of-the-art products and
                    services that set the technology and performance standard
                    for the industry. It’s a well-known fact, what's quite
                    remarkable is the company's quest to continuously expand its
                    horizons. Goodyear, which is world's largest tire
                    manufacturer, has now added Lubricants to its quality
                    consumer products portfolio.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Ayesha + Marriam Pvt Ltd, is a leading &amp; marketing
                    company with presence in multiple countries. These include
                    Pakistan & Afghanistan. The Group was established more than
                    four decades ago with the primary focus on bringing to
                    market specialty in each automotive field. The strength of
                    the Group lies in the dedicated personnel that service
                    customers around the clock, provides financial stability,
                    product inventory and prompt delivery.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Good Year Lubricants is consistently improving the
                    performance of all products. Using the most advanced
                    formulation and state of the art technology; the products
                    are fully tested and proven both in laboratory and fields.
                    All international standards are being followed during the
                    manufacturing process and the laboratory checks made on all
                    products before they leave the blending plant. All products
                    are guaranteed to perform as per the specifications of API.
                  </p>
                  <br />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
