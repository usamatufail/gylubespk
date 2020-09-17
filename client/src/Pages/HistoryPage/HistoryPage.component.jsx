import React from "react";
import "./HistoryPage.styles.scss";
//Timeline Component from react-vertical-timeline-component
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//Custom components
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb.component";

//html-parse for accuracy
var parse = require("html-react-parser");

const linksForBreadcrumb = [
  { path: "/", title: "Home" },
  { path: "/history", title: "History" },
];

const historyData = [
  {
    date: "1898",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599773534/adp-gallery5eb57414eedec_o5p6lc.jpg",
    title: "Foundation Of Goodyear",
    description: `Goodyear is founded by Frank A. Seiberling and enters its first
    home: a strawboard factory on the banks of the Little Cuyahoga
    River in East Akron, Ohio, USA. The company is named in honour of
    Charles Goodyear, who discovered the rubber vulcanization process
    in 1839. The company makes horseshoe pads, bicycle and carriage
    tires, sealing rings for canning, fire hose and even rubber poker
    chips.`,
  },
  {
    date: "1947",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599774263/adp-gallery5ed7b2b1127ad_ptwtjr.jpg",
    title: "Aviation",
    description: `Goodyear makes a name for itself in aviation.`,
  },
  {
    date: "1964",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599774684/adp-gallery5eb5196b8bc0c_rrhw4u.jpg",
    title: "Craig Breedlove",
    description: `Using Goodyear tires, Craig Breedlove becomes the first man to top 600 miles (960km) an hour.`,
  },
  {
    date: "1971",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599774763/History%20Folder/adp-gallery5eb51a1cf17a9_gp3twj.jpg",
    title: "Apollo 14's",
    description: `Goodyear put the first tire on the moon by equipping the Apollo 14 Modular Equipment Transporter or moon buggy with specially designed tires.`,
  },
  {
    date: "1985",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599774835/History%20Folder/1985-radial-tyre_jo2jsw.png",
    title: "Radial Tires",
    description: `Goodyear supplies the first radial tires for commercial aircraft.`,
  },
  {
    date: "1993",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599774905/History%20Folder/1993-AquaTred_rbsbl5.jpg",
    title: "Aquatred Tire",
    description: `Goodyear introduces the Aquatred tire, offering a revolutionary design which delivers high performance traction in both wet and dry conditions.`,
  },
  {
    date: "1997",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599774964/History%20Folder/adp-gallery5eb574d21cb23_dsnw0u.jpg",
    title: "350 F1 Grand Prix",
    description: `Goodyear is first to win 350 F1 Grand Prix races.`,
  },
  {
    date: "1998",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599775421/History%20Folder/1998-gy-100th-anniversary_kv0x3c.jpg",
    title: parse("100<sup>th</sup> anniversary"),
    description: `Goodyear celebrates its 100th anniversary.`,
  },
  {
    date: "2003",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599775706/History%20Folder/2003-gy-drag-racing-tyre_v6k67m.jpg",
    title: "Hot Rod",
    description: `Goodyear stands at the pinnacle of drag racing, winning the most championships in both the professional and sportsman categories in the National Hot Rod and International Hot Rod Association competitions.`,
  },
  {
    date: "2004",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599775716/History%20Folder/2004-e1432023351234_jb1ini.jpg",
    title: "NASCAR",
    description: `Goodyear and NASCAR celebrate their 50th anniversary together. Goodyear is the longest-running sponsor of the sport.`,
  },
  {
    date: "2009",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599775784/History%20Folder/2009-gy-spring-tyre_oxzzzb.jpg",
    title: "Spring Tire",
    description: `Goodyear and NASA invent "Spring Tire" for the moon – an energy efficient tire that would not go flat.`,
  },
  {
    date: "2010",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599775795/History%20Folder/2010-Fuel-Saving-Technology_yxilgu.jpg",
    title: "Fuel Saving Technology into new tires",
    description: `Goodyear Asia Pacific begins introducing the company's proprietary Fuel Saving Technology into new tires, letting drivers go further for less and reduce emissions.`,
  },
  {
    date: "2012",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599775807/History%20Folder/2012-AMT-2_flwqky.jpg",
    title: "Soybean oil",
    description: `Goodyear discovers that using soybean oil in tires can potentially increase tread life by 10 percent and reduce the use of petroleum-based oil in the manufacturing process.`,
  },
  {
    date: "2014",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599775841/History%20Folder/2014-rice-harvest_v4vtsb.jpg",
    title: "Rice harvest to fuel-efficient tire treads",
    description: `Goodyear announces plans to convert waste from rice harvest to fuel-efficient tire treads.`,
  },
  {
    date: "2017",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599775856/History%20Folder/adp-gallery5ed7b61fb1a84_p8fpkw.jpg",
    title: "Worlds Most Admired Tire Maker",
    description: `Goodyear is named by Fortune Magazine as the "Worlds Most Admired Tire Maker". Today Goodyear is one of the largest tire companies, with operations in most regions of the world.`,
  },
  {
    date: "2020",
    img:
      "https://res.cloudinary.com/maxxispk/image/upload/v1599776219/michael-dziedzic-aQYgUYwnCsM-unsplash_gzwcoc.jpg",
    title:
      "Self-Regenerating Concept Tire With Artificial Intelligence Features",
    description:
      "The company unveiled a self-regenerating concept tire with artificial intelligence features that allow the tire treads to change according to the environment and climate.[45] The technology also uses sensors to learn from driver behavior. Information is sent to Goodyear’s cloud servers where it is processed to build drivers' profiles, allowing predictions to be made based on drivers' data.",
  },
];

const HistoryPage = () => {
  const isString = (value) => {
    return typeof value === "string" || value instanceof String;
  };
  return (
    <>
      <Breadcrumb links={linksForBreadcrumb} />
      <div className="history-page__container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col sm-12">
              <div className="text-center">
                <h3 style={{ fontWeight: "400", color: "#ffffff" }}>
                  A Name You Know, A Brand You Trust
                </h3>
                <p
                  style={{
                    marginTop: "2%",
                    textAlign: "left",
                    color: "#ffffff",
                  }}
                >
                  Since 1898, Goodyear branded products have carried a
                  reputation for quality throughout the world. We have now
                  expanded that history of quality and performance to a
                  high-quality, full line of motor oils and coolant manufactured
                  and distributed under the Goodyear Lubricants brand. From
                  extreme performance motor oils, antifreeze, DEF and chemicals,
                  we have products for all applications, ranging from passenger
                  car motor oils (PCMO) to diesel fleets to heavy construction
                  and industrial applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <VerticalTimeline>
          {historyData.map((data, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                date={data.date}
              >
                <img
                  className="vertical-timeline-element-image"
                  src={data.img}
                  alt={
                    isString(data.title)
                      ? data.title.replace(/ +/g, "-").toLowerCase()
                      : "a-picture"
                  }
                />
                <h4 className="vertical-timeline-element-title">
                  {data.title}
                </h4>
                <p className="vertical-timeline-element-description">
                  {data.description}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};
export default HistoryPage;
