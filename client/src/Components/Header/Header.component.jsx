import React from "react";
import "./Header.styles.scss";
//React Router DOM Components
import { Link, withRouter } from "react-router-dom";
//redux logic
import { connect } from "react-redux";
import { logout } from "../../redux/users/users.actions";
//rect-reveal components
import Fade from "react-reveal/Fade";
//images
const GoodYearLubricants = "https://i.ibb.co/FHyBZsm/pakistangylubes.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //logout
    const { logout, auth } = this.props;
    const lessThanOrEqualTo991 = window.innerWidth <= 991;
    const currentRoute = this.props.location.pathname;
    const checkIfAdmin = !currentRoute.includes("/admin");
    const { scrolledStyles } = this.state;
    return (
      <React.Fragment>
        {checkIfAdmin ? (
          <div
            className={`navigation-wrap bg-dark start-header ${
              scrolledStyles ? "scroll-on" : "start-style"
            }`}
          >
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <Fade left>
                      <Link className="navbar-brand" to="/">
                        <img src={GoodYearLubricants} alt="" />
                      </Link>
                    </Fade>
                    <Fade right>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    </Fade>
                    <Fade right>
                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul
                          className="navbar-nav ml-auto py-4 py-md-0"
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <li
                            className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                            type={lessThanOrEqualTo991 ? "button" : "false"}
                            data-toggle={
                              lessThanOrEqualTo991 ? "collapse" : false
                            }
                            data-target={
                              lessThanOrEqualTo991
                                ? "#navbarSupportedContent"
                                : false
                            }
                            aria-controls={
                              lessThanOrEqualTo991
                                ? "navbarSupportedContent"
                                : false
                            }
                            aria-expanded={
                              lessThanOrEqualTo991 ? "false" : false
                            }
                            aria-label={
                              lessThanOrEqualTo991 ? "Toggle navigation" : false
                            }
                          >
                            <Link
                              className="nav-link"
                              style={{ textAlign: "center" }}
                              to="/"
                            >
                              HOME
                            </Link>
                          </li>

                          <li
                            className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                            type={lessThanOrEqualTo991 ? "button" : "false"}
                            data-toggle={
                              lessThanOrEqualTo991 ? "collapse" : false
                            }
                            data-target={
                              lessThanOrEqualTo991
                                ? "#navbarSupportedContent"
                                : false
                            }
                            aria-controls={
                              lessThanOrEqualTo991
                                ? "navbarSupportedContent"
                                : false
                            }
                            aria-expanded={
                              lessThanOrEqualTo991 ? "false" : false
                            }
                            aria-label={
                              lessThanOrEqualTo991 ? "Toggle navigation" : false
                            }
                          >
                            <Link
                              to="/about"
                              style={{ textAlign: "center" }}
                              className="nav-link"
                            >
                              ABOUT
                            </Link>
                          </li>
                          <li
                            className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                            type={lessThanOrEqualTo991 ? "button" : "false"}
                            data-toggle={
                              lessThanOrEqualTo991 ? "collapse" : false
                            }
                            data-target={
                              lessThanOrEqualTo991
                                ? "#navbarSupportedContent"
                                : false
                            }
                            aria-controls={
                              lessThanOrEqualTo991
                                ? "navbarSupportedContent"
                                : false
                            }
                            aria-expanded={
                              lessThanOrEqualTo991 ? "false" : false
                            }
                            aria-label={
                              lessThanOrEqualTo991 ? "Toggle navigation" : false
                            }
                          >
                            <Link
                              style={{ textAlign: "center" }}
                              className="nav-link"
                              to="/products"
                            >
                              PRODUCTS
                            </Link>
                          </li>
                          <li
                            className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                            type={lessThanOrEqualTo991 ? "button" : "false"}
                            data-toggle={
                              lessThanOrEqualTo991 ? "collapse" : false
                            }
                            data-target={
                              lessThanOrEqualTo991
                                ? "#navbarSupportedContent"
                                : false
                            }
                            aria-controls={
                              lessThanOrEqualTo991
                                ? "navbarSupportedContent"
                                : false
                            }
                            aria-expanded={
                              lessThanOrEqualTo991 ? "false" : false
                            }
                            aria-label={
                              lessThanOrEqualTo991 ? "Toggle navigation" : false
                            }
                          >
                            <Link
                              className="nav-link"
                              style={{ textAlign: "center" }}
                              to="/history"
                            >
                              HISTORY
                            </Link>
                          </li>
                          <li
                            id="tyre-finder-list-item"
                            className="pl-4 pl-md-0 ml-0 ml-md-4"
                            type={lessThanOrEqualTo991 ? "button" : "false"}
                            data-toggle={
                              lessThanOrEqualTo991 ? "collapse" : false
                            }
                            data-target={
                              lessThanOrEqualTo991
                                ? "#navbarSupportedContent"
                                : false
                            }
                            aria-controls={
                              lessThanOrEqualTo991
                                ? "navbarSupportedContent"
                                : false
                            }
                            aria-expanded={
                              lessThanOrEqualTo991 ? "false" : false
                            }
                            aria-label={
                              lessThanOrEqualTo991 ? "Toggle navigation" : false
                            }
                          >
                            {auth.isAuthenticated ? (
                              <div
                                id="tyre-finder"
                                className="nav-link"
                                onClick={() => logout()}
                              >
                                LOGOUT
                              </div>
                            ) : (
                              <Link
                                to="/distributionship"
                                style={{ textAlign: "center" }}
                              >
                                <div id="tyre-finder" className="nav-link">
                                  DISTRIBUTIONSHIP
                                </div>
                              </Link>
                            )}
                          </li>
                          {/* <div className="nav-link" style={{ textAlign: "left" }}>
                          <div
                            className="pl-4 pl-md-0 ml-0 ml-md-4"
                            style={{
                              marginLeft: "0px !important",
                              textAlign: "center",
                            }}
                          >
                            <a
                              href="https://www.facebook.com/MaxxisPakistan"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FacebookOutlined style={{ fontSize: "30px" }} />
                              <span className="social-text">Facebook</span>
                            </a>
                            <a
                              href="https://www.instagram.com/maxxispakistan/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <InstagramOutlined
                                style={{ fontSize: "30px", marginLeft: "5px" }}
                              />
                              <span className="social-text">Instagram</span>
                            </a>
                            <a
                              href="https://www.linkedin.com/company/pakistanmaxxis"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkedinOutlined
                                style={{ fontSize: "30px", marginLeft: "5px" }}
                              />
                              <span className="social-text">LinkedIn</span>
                            </a>
                          </div>
                        </div> */}
                        </ul>
                      </div>
                    </Fade>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.users,
});

export default withRouter(connect(mapStateToProps, { logout })(Header));
