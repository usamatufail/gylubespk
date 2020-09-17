import React, { useState } from "react";
import "./LoginPage.styles.scss";
//Custom components
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb.component";
//react-router-dom Components
import { Redirect } from "react-router-dom";
//redux components
import { login } from "../../redux/users/users.actions";
import { connect } from "react-redux";

//Links for Breadcrumb
const linksForBreadcrumb = [
  { path: "/", title: "Home" },
  { path: "/login", title: "Login Page" },
];

const LoginPage = (props) => {
  //action
  const { login } = props;
  //auth state
  const { auth } = props;
  //   state to hold form data for login
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //   descructing vars from formData object
  const { email, password } = formData;
  //    function to handle change
  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };
  //    function to handle submit
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <>
      {auth.isAuthenticated === null || auth.isAuthenticated ? (
        <Redirect to="/admin/categories" />
      ) : (
        <>
          <Breadcrumb links={linksForBreadcrumb} />
          <div className="login-page__container">
            <div className="container-fluid">
              <div className="row no-gutter">
                {/* The image hafl */}
                <div className="col-md-6 d-none d-md-flex bg-image"></div>
                {/* The content half */}
                <div className="col-md-6 bg-light">
                  <div className="login d-flex align-items-center py-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                          <h3 className="display-4">Login Now</h3>
                          <p className="text-muted mb-4">
                            You cannot login if you are not authorized. Please
                            contact <br /> 0311-7700158 for further queries.
                          </p>
                          <form onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group mb3">
                              <input
                                type="email"
                                id="inputEmail"
                                placeholder="Email Address"
                                required
                                autoFocus
                                onChange={handleChange("email")}
                                className="form-control rounded-pill border-0 shadow-sm px-4"
                              />
                            </div>
                            <div className="form-group mb3">
                              <input
                                type="password"
                                id="inputPassword"
                                placeholder="Password"
                                required
                                onChange={handleChange("password")}
                                className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                            >
                              Sign in
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.users,
});

export default connect(mapStateToProps, { login })(LoginPage);
