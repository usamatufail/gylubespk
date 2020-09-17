import React from "react";
//ant-design component
import { Modal, Input, Row, Col, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

class EditCategory extends React.Component {
  render() {
    const {
      visible,
      handleChange,
      onImageChange,
      loading,
      handleCancel,
      handleOk,
      title,
      description,
      urlSlug,
    } = this.props;

    //props for upload
    const props = {
      name: "file",
      multiple: false,
      action: "http://localhost:8080/api/categories/uploadImage",
      onChange: onImageChange,
    };

    return (
      <>
        <Modal
          title="Add Category"
          visible={visible}
          onOk={handleOk}
          confirmLoading={loading}
          onCancel={handleCancel}
        >
          <Row align="middle" style={{ marginBottom: "1rem" }}>
            <Col span={5}>Title:</Col>
            <Col span={19}>
              <Input
                placeholder="Please input title of category"
                onChange={handleChange}
                name="title"
                value={title}
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
                value={description}
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
                onChange={handleChange}
                name="urlSlug"
                value={urlSlug}
              />
            </Col>
          </Row>
        </Modal>
      </>
    );
  }
}

export default EditCategory;
