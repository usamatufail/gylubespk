import React from "react";
//redux logic
import { connect } from "react-redux";
import { createCategory } from "../../../redux/categories/categories.actions";
//ant-design component
import { Modal, Button, Input, Row, Col, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

class AddCategory extends React.Component {
  state = {
    visible: false,
    title: "",
    description: "",
    file: null,
    urlSlug: "",
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    const { title, description, file, urlSlug } = this.state;
    if (title && description && file && urlSlug) {
      const body = { title, description, file, urlSlug };
      this.props.createCategory(body);
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

  //function to handle category image upload
  onImageChange = (info) => {
    const { status } = info.file;
    if (status !== "uploading") {
      // console.log(info.file, info.fileList);
    }
    if (status === "done") {
      const res = info.file;
      // console.log(res.response);
      this.setState({ file: res.response });
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    } else {
      this.setState({ file: "" });
    }
  };

  render() {
    const { visible } = this.state;
    //props for upload
    const props = {
      name: "file",
      multiple: false,
      action: "http://localhost:8080/api/categories/uploadImage",
      onChange: this.onImageChange,
    };

    return (
      <>
        <Button
          type="primary"
          onClick={this.showModal}
          size="large"
          style={{ marginBottom: "1rem", float: "right" }}
        >
          Add New Category
        </Button>
        <Modal
          title="Add Category"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={this.props.loading}
          onCancel={this.handleCancel}
        >
          <Row align="middle" style={{ marginBottom: "1rem" }}>
            <Col span={5}>Title:</Col>
            <Col span={19}>
              <Input
                placeholder="Please input title of category"
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
                placeholder="Please input description for category"
                onChange={this.handleChange}
                name="description"
                value={this.state.description}
              />
            </Col>
          </Row>
          <Row align="middle" style={{ marginBottom: "1rem" }}>
            <Col span={5}>Image:</Col>
            <Col span={19}>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Strictly prohibit from uploading company data or other band
                  files.
                </p>
              </Dragger>
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
  loading: state.categories.loading,
});

export default connect(mapStateToProps, { createCategory })(AddCategory);
