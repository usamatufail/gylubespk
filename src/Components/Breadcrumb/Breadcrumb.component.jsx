import React from "react";
import "./Breadcrumb.styles.scss";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const { links } = props;
  return (
    <div className="breadcrumb-area breadcrumb-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-txt">
              <h1>{props.links[props.links.length - 1].title}</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="breadcrumb-links">
              <ul>
                {links.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link to={link.path}>{link.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb-overlay"></div>
    </div>
  );
};

export default Breadcrumb;
