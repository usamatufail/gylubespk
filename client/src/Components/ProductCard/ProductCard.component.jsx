import React from "react";
import "./ProductCard.styles.scss";
//react-router-dom
import { Link } from "react-router-dom";
//ant-design components
import { Card } from "antd";
const { Meta } = Card;

const ProductCard = (props) => {
  const { product } = props;
  return (
    <div className="col-xl-4 col-md-6">
      <div className="single-product">
        <Link to={`/product/${product.urlSlug}`}>
          <Card
            hoverable
            cover={
              <img
                className="product-thumbnail"
                alt={product.title}
                src={product.files[0]}
              />
            }
          >
            <Meta title={product.title} description={product.title} />
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
