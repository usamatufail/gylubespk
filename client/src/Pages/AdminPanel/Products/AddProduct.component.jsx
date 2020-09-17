import React from "react";
//redux logic
import { connect } from "react-redux";
import { createProduct } from "../../../redux/products/products.actions";
//ant-design component
import {
  Modal,
  Button,
  Input,
  Row,
  Col,
  Upload,
  // message,
  Select,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

class AddCategory extends React.Component {
  state = {
    visible: false,
    title: "",
    description: "",
    tags: [],
    category: "",
    urlSlug: "",
    //image logic
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
    files: [],
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    const { title, description, files, category, tags, urlSlug } = this.state;
    if (title && description && files && urlSlug && category && tags) {
      const body = { title, description, files, tags, category, urlSlug };
      this.props.createProduct(body);
    }
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  //handleCategoryChange method
  handleCategoryChange = (value) => {
    this.setState({ category: value });
  };

  //handleTagsChsnge method
  handleTagsChsnge = (value) => {
    this.setState({ tags: value });
  };

  //function to handle change
  handleChange = (e) => {
    const { target } = e;
    if (target.name === "title") {
      this.setState({ [target.name]: target.value });
      this.setState({
        urlSlug: target.value.replace(/\s+/g, "-").toLowerCase(),
      });
    } else {
      this.setState({ [target.name]: target.value });
    }
  };

  //images logic
  handleImageCancel = () => this.setState({ previewVisible: false });
  handleImagePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };
  handleImageChange = ({ fileList }) =>
    this.setState({
      fileList,
      files: fileList.map((file) => file.response),
    });

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const { visible } = this.state;

    return (
      <>
        <Button
          type="primary"
          onClick={this.showModal}
          size="large"
          style={{ marginBottom: "1rem", float: "right" }}
        >
          Add New Product
        </Button>
        <Modal
          title="Add Product"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={this.props.loading}
          onCancel={this.handleCancel}
        >
          <Row align="middle" style={{ marginBottom: "1rem" }}>
            <Col span={5}>Category:</Col>
            <Col span={19}>
              <Select
                showSearch
                style={{ width: "100%" }}
                placeholder="Select a category"
                optionFilterProp="children"
                onChange={this.handleCategoryChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {this.props.categories.map((category) => {
                  return (
                    <Option key={category._id} value={category._id}>
                      {category.title}
                    </Option>
                  );
                })}
              </Select>
            </Col>
          </Row>
          <Row align="middle" style={{ marginBottom: "1rem" }}>
            <Col span={5}>Title:</Col>
            <Col span={19}>
              <Input
                placeholder="Please input title of product"
                onChange={this.handleChange}
                name="title"
                value={this.state.title}
              />
            </Col>
          </Row>
          <Row align="middle" style={{ marginBottom: "1rem" }}>
            <Col span={5}>Description:</Col>
            <Col span={19}>
              <Input
                placeholder="Please input description for product"
                onChange={this.handleChange}
                name="description"
                value={this.state.description}
              />
            </Col>
          </Row>
          <Row align="middle" style={{ marginBottom: "1rem" }}>
            <Col span={5}>Tags:</Col>
            <Col span={19}>
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Please enter tags"
                onChange={this.handleTagsChsnge}
              ></Select>
            </Col>
          </Row>
          <Row align="middle" style={{ marginBottom: "1rem" }}>
            <Col span={5}>Images:</Col>
            <Col span={19}>
              <>
                <Upload
                  action="http://localhost:8080/api/products/uploadImage"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handleImagePreview}
                  onChange={this.handleImageChange}
                >
                  {fileList.length >= 3 ? null : (
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  )}
                </Upload>
                <Modal
                  visible={previewVisible}
                  title={previewTitle}
                  footer={null}
                  onCancel={this.handleImageCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </>
            </Col>
          </Row>
          <Row align="middle" style={{ marginBottom: "1rem" }}>
            <Col span={5}>URL Slug:</Col>
            <Col span={19}>
              <Input
                placeholder="Please input URL Slug for Category"
                onChange={this.handleChange}
                name="urlSlug"
                value={this.state.urlSlug}
              />
            </Col>
          </Row>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  categories: state.categories.categories,
});

export default connect(mapStateToProps, { createProduct })(AddCategory);
