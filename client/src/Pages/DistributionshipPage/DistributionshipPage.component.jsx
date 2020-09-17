import React from "react";
import "./DistributionshipPage.styles.scss";
//Custom components
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb.component";
import ComingSoon from "../../Components/ComingSoon/ComingSoon.component";
import RegistrationForm from "./Form.component";
const linksForBreadcrumb = [
  { path: "/", title: "Home" },
  { path: "/distributionship", title: "Get Distributionship" },
];

const completed = false;

const DistributionshipPage = () => {
  return (
    <>
      <Breadcrumb links={linksForBreadcrumb} />
      <div className="distribution-page__container">
        {completed ? <RegistrationForm /> : <ComingSoon />}
      </div>
    </>
  );
};

export default DistributionshipPage;
