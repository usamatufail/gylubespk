import React from "react";
import "./ProductPage.styles.scss";
//react image gallery components
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
//Custom components
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb.component";

const ProductPage = (props) => {
  const { products } = props;
  //function to filter current product by Url
  let currentProduct = products.filter(
    (product) => product.urlSlug === props.match.params.productUrlSlug
  );
  currentProduct = currentProduct[0];

  let linksForBreadcrumb;
  let imagesForReactImageGallery;
  if (currentProduct) {
    linksForBreadcrumb = [
      { path: "/", title: "HOME" },
      {
        path: `/product/${currentProduct.urlSlug}`,
        title: "PRODUCT DETAILS",
      },
    ];
    imagesForReactImageGallery = currentProduct.files.map((image) => {
      return {
        original: image,
        thumbnail: image.replace("/upload", "/upload/w_100"),
      };
    });
  }
  return (
    <>
      {currentProduct ? (
        <>
          <Breadcrumb
            links={
              linksForBreadcrumb
                ? linksForBreadcrumb
                : [{ path: "/", title: "HOME" }]
            }
          />
          <div className="product-page__container">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <ImageGallery
                    items={imagesForReactImageGallery}
                    lazyLoad={true}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    showNav={false}
                  />
                </div>
                <div className="col-lg-7">
                  <div className="content">
                    <h1 className="title">{currentProduct.title}</h1>
                    <div className="description">
                      <p>{currentProduct.description}</p>
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

export default ProductPage;
