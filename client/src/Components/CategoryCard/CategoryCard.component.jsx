import React from "react";
import "./CategoryCard.styles.scss";
//react-router-dom
import { Link } from "react-router-dom";
//ant-design components
import { Card } from "antd";
const { Meta } = Card;

const CategoryCard = (props) => {
  const { category } = props;
  return (
    <div className="col-xl-4 col-md-6">
      <div className="single-category">
        <Link to={`/products/${category.urlSlug}`}>
          <Card
            hoverable
            cover={
              <img
                className="category-thumbnail"
                alt={category.title}
                src={category.file}
              />
            }
          >
            <Meta
              title={category.title}
              // description={category.description}
            />
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
