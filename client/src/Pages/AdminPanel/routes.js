import React from "react";
// @ant-design/icons
import { PieChartOutlined, SlidersOutlined } from "@ant-design/icons";
// core components/views for Admin layout
import Categories from "./Categories/Categories.component";
import Products from "./Products/Products.component";

const adminPanelRoutes = [
  {
    path: "/categories",
    name: "Categories",
    icon: <PieChartOutlined />,
    component: Categories,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: <SlidersOutlined />,
    component: Products,
    layout: "/admin",
  },
];

export default adminPanelRoutes;
