import React from "react";
import "./Products.styles.scss";
//highlighter for highlighing searched words
import Highlighter from "react-highlight-words";
//ant design Components
import { Table, Input, Button, Space, Popconfirm, message, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";
//redux logic
import { connect } from "react-redux";
//action to delete & edit product
import {
  deleteProduct,
  updateProduct,
} from "../../../redux/products/products.actions";
//Custom components
import AddProduct from "./AddProduct.component";
import EditProduct from "./EditProduct.component";

class Products extends React.Component {
  state = {
    searchText: "",
    searchedColumn: "",
    //edit logic
    product: null,
    visible: false,
  };

  //handle confirm delete
  confirmDelete = (product) => {
    this.props.deleteProduct(product._id);
    message.success("Product will be deleted now.");
  };

  //method to handle search for column
  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  //function to handle Reset search
  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  //edit logic
  showEditModal = (product) => {
    this.setState({ product: product, visible: true });
  };

  handleCancel = () => {
    this.setState({ product: null, visible: false });
  };

  render() {
    const columns = [
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Button
              type="primary"
              size="small"
              onClick={() => this.showEditModal(record)}
            >
              Edit
            </Button>
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => this.confirmDelete(record)}
              onCancel={() => this.confirmCancel}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" size="small">
                Delete
              </Button>
            </Popconfirm>
          </Space>
        ),
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        width: "10%",
        ...this.getColumnSearchProps("title"),
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        width: "60%",
        ...this.getColumnSearchProps("description"),
      },
      {
        title: "Tags",
        dataIndex: "tags",
        key: "tags",
        render: (tags) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category",
        ...this.getColumnSearchProps("category"),
      },
      {
        title: "Image 1",
        dataIndex: "image1",
        key: "image1",
        width: "10%",
        render: (image1) => (
          <img
            className="thumbnail-image-admin"
            width={150}
            src={image1}
            alt={image1}
          />
        ),
      },
      {
        title: "Image 2",
        dataIndex: "image2",
        key: "image2",
        width: "10%",
        render: (image2) => (
          <img
            className="thumbnail-image-admin"
            width={150}
            src={image2}
            alt={image2}
          />
        ),
      },
      {
        title: "Image 3",
        dataIndex: "image3",
        key: "image3",
        width: "10%",
        render: (image3) => (
          <img
            className="thumbnail-image-admin"
            width={150}
            src={image3}
            alt={image3}
          />
        ),
      },
      {
        title: "URL Slug",
        dataIndex: "urlSlug",
        key: "urlSlug",
        ...this.getColumnSearchProps("urlSlug"),
      },
    ];
    const data = this.props.products.map((product) => {
      return {
        _id: product._id,
        title: product.title,
        description: product.description,
        categoryId: product.category._id,
        category: product.category.title,
        tags: product.tags,
        image1: product.files[0],
        image2: product.files[1],
        image3: product.files[3],
        urlSlug: product.urlSlug,
      };
    });
    return (
      <div className="categories-admin__container">
        <AddProduct />
        {this.state.product !== null && this.state.visible ? (
          <EditProduct
            visible={this.state.visible}
            handleCancel={this.handleCancel}
            product={this.state.product}
          />
        ) : null}
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 1600 }}
          bordered
          loading={this.props.loading}
          title={() => <h3>Products</h3>}
          // footer={() => "Footer"}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  products: state.products.products,
  loading: state.products.loading,
});

export default connect(mapStateToProps, { deleteProduct, updateProduct })(
  Products
);
