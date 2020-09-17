import React from "react";
import "./Categories.styles.scss";
//highlighter for highlighing searched words
import Highlighter from "react-highlight-words";
//ant design Components
import { Table, Input, Button, Space, Popconfirm, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
//redux logic
import { connect } from "react-redux";
//action to delete category
import {
  deleteCategory,
  updateCategory,
} from "../../../redux/categories/categories.actions";
//Custom components
import AddCategory from "./AddCategory.component";
import EditCategory from "./EditCategory.component";

class Categories extends React.Component {
  state = {
    searchText: "",
    searchedColumn: "",
    //edit category fields
    visible: false,
    _id: "",
    title: "",
    description: "",
    file: "",
    urlSlug: "",
  };

  //function to handle category edit change
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

  //function to handle category edit image upload
  onImageChange = (info) => {
    const { status } = info.file;
    if (status !== "uploading") {
    }
    if (status === "done") {
      const res = info.file;
      this.setState({ file: res.response });
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    } else {
      this.setState({ file: "" });
    }
  };

  //handleOK for category edit modal
  handleOk = () => {
    const { _id, title, description, file, urlSlug } = this.state;
    if (_id && title && description && file && urlSlug) {
      const body = { title, description, file, urlSlug };
      this.props.updateCategory(body, _id);
    }
    this.setState({ visible: false });
  };

  //handle category update modal show
  showEditModal = (category) => {
    const { _id, title, description, file, urlSlug } = category;
    this.setState({
      _id,
      title,
      description,
      file,
      urlSlug,
      visible: true,
    });
  };

  //handle canceling category update
  handleCancel = () => {
    this.setState({
      visible: false,
      category: null,
    });
  };

  //handle confirm delete
  confirmDelete = (category) => {
    this.props.deleteCategory(category._id);
    message.success("Category will be deleted now.");
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

  //function to handle Reset
  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
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
        title: "File",
        dataIndex: "file",
        key: "file",
        width: "10%",
        render: (file) => (
          <img
            className="thumbnail-image-admin"
            width={150}
            src={file}
            alt={file}
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
    const data = this.props.categories;
    return (
      <div className="categories-admin__container">
        <AddCategory />
        {this.state.category !== null && this.state.visible ? (
          <EditCategory
            onImageChange={this.onImageChange}
            handleChange={this.handleChange}
            handleOk={this.handleOk}
            visible={this.state.visible}
            handleCancel={this.handleCancel}
            loading={this.props.loading}
            _id={this.state.id}
            title={this.state.title}
            description={this.state.description}
            file={this.state.file}
            urlSlug={this.state.urlSlug}
          />
        ) : null}
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 1600 }}
          bordered
          loading={this.props.loading}
          title={() => <h3>Categories</h3>}
          // footer={() => "Footer"}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  loading: state.categories.loading,
});

export default connect(mapStateToProps, { deleteCategory, updateCategory })(
  Categories
);
