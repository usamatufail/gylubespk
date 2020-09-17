import React from "react";
import "./CategoriesPage.styles.scss";
//Custom components
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb.component";
//ant design icon
import { ArrowRightOutlined } from "@ant-design/icons";
//react-router-dom Link component
import { Link } from "react-router-dom";
//custom Components
import CategoryCard from "../../Components/CategoryCard/CategoryCard.component";
const linksForBreadcrumb = [
  { path: "/", title: "Home" },
  { path: "/products", title: "Our Products" },
];

const CategoriesPage = (props) => {
  const { categories } = props;
  return (
    <>
      <Breadcrumb links={linksForBreadcrumb} />
      <div className="products-page__container">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <p className="para">
                Goodyear Lubricants has developed a wide range of engine oil,
                gear oils, hydraulic oils, greases and specialties for bikes,
                scooters, cars, light and heavy commercial vehicles & tractors.
                Blended with our advanced additive technologies, every product
                is designed to enhance performance, reliability and longevity
                for your use.
              </p>
            </div>
            <div className="col-lg-3">
              <div className="filters">
                <div className="filter category">
                  <div className="filter-header">
                    <h5>Category</h5>
                  </div>
                  <div className="filter-body">
                    <ul>
                      {categories.map((cat) => (
                        <li key={cat._id}>
                          <div className="row">
                            <div className="col-2">
                              <ArrowRightOutlined
                                style={{ color: "#fbd900" }}
                              />
                            </div>
                            <div className="col-10">
                              <Link to={`/products/${cat.urlSlug}`}>
                                {cat.title}
                              </Link>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row no-gutters">
                <div className="col-12">
                  <div className="row">
                    {categories.map((category) => (
                      <CategoryCard key={category._id} category={category} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
