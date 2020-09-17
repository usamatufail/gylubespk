import React from "react";
import "./AdminPanel.styles.scss";
//routes for admin panel
import routes from "./routes.js";
//react-router-dom components for navigation
import { Switch, Route, Redirect, Link, withRouter } from "react-router-dom";
//redux logic
import { connect } from "react-redux";
import { logout } from "../../redux/users/users.actions";
//ant-design Components + icons
import { Layout, Menu, Row, Col } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
const { Content, Footer, Sider } = Layout;

const AdminPanel = (props) => {
  const { logout, users } = props;
  //switch component with routes for switching between components
  const switchRoutes = (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/admin" to="/admin/categories" />
    </Switch>
  );
  const currentRoute = props.location.pathname;
  return (
    <div className="admin-panel__container">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            // console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            // console.log(collapsed, type);
          }}
        >
          <div className="logo">
            <img
              src="https://i.ibb.co/FHyBZsm/pakistangylubes.png"
              alt="goodyear-logo"
            />
          </div>

          {users.user !== null && users.user ? (
            <div className="user">
              <h3>
                <Row align="middle">
                  <Col span={6}>
                    <UserOutlined style={{ fontSize: "2rem" }} />
                  </Col>
                  <Col span={18}>Hi, {users.user.name}</Col>
                </Row>
              </h3>
            </div>
          ) : null}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={currentRoute}>
            {routes.map((route, index) => (
              <Menu.Item key={route.layout + route.path} icon={route.icon}>
                <Link to={route.layout + route.path}>{route.name}</Link>
              </Menu.Item>
            ))}
            <Menu.Item key={"logout"} icon={<LogoutOutlined />}>
              <Link onClick={() => logout()}>Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {switchRoutes}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Good Year Lubricants PK ©2020 Created by Usama Tufail
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { logout })(withRouter(AdminPanel));
