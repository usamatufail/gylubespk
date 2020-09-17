import React from "react";
import "./CategoriesProductsPage.styles.scss";
//Custom components
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb.component";
//ant design icon
import { ArrowRightOutlined } from "@ant-design/icons";
//react-router-dom Link component
import { Link } from "react-router-dom";
//Custom components
import ProductCard from "../../Components/ProductCard/ProductCard.component";
const CategoriesProductsPage = (props) => {
  const { categories, products } = props;
  //function to filter current category by Url
  const currentCategory = categories.filter(
    (category) => category.urlSlug === props.match.params.categoryUrlSlug
  );
  let currentProducts;
  let linksForBreadcrumb;
  //function to filter current product by Url
  if (currentCategory.length > 0) {
    currentProducts = products.filter(
      (product) => product.category.urlSlug === currentCategory[0].urlSlug
    );
    linksForBreadcrumb = [
      { path: "/", title: "HOME" },
      { path: "/products", title: "OUR PRODUCTS" },
    ];
  }
  return (
    <>
      {currentProducts ? (
        <>
          <Breadcrumb links={linksForBreadcrumb} />
          <div className="category-products-page__container">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-xs-12">
                  <p className="para">{currentCategory[0].description}</p>
                </div>
                <div className="col-lg-3">
                  <div className="filters">
                    <div className="filter category">
                      <div className="filter-header">
                        <h5>Category</h5>
                      </div>
                      <div className="filter-body">
                        <ul>
                          {categories.map((category) => (
                            <li key={category._id}>
                              <div className="row">
                                <div className="col-2">
                                  <ArrowRightOutlined
                                    style={{ color: "#fbd900" }}
                                  />
                                </div>
                                <div className="col-10">
                                  <Link to={`/products/${category.urlSlug}`}>
                                    {category.title}
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
                        {currentProducts.map((product) => (
                          <ProductCard key={product._id} product={product} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CategoriesProductsPage;
