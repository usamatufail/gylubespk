import React from "react";
import "./ContactPage.styles.scss";
//Custom components
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb.component";
import ComingSoon from "../../Components/ComingSoon/ComingSoon.component";
const linksForBreadcrumb = [
  { path: "/", title: "Home" },
  { path: "/contact", title: "Contact Us" },
];

const completed = false;

const DistributionshipPage = () => {
  return (
    <>
      <Breadcrumb links={linksForBreadcrumb} />
      <div className="distribution-page__container">
        {completed ? <></> : <ComingSoon />}
      </div>
    </>
  );
};

export default DistributionshipPage;
