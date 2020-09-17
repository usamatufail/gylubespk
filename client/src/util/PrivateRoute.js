import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated },
  ...rest
}) => {
  const authenticated = isAuthenticated === null || isAuthenticated;
  return (
    <Route
      {...rest}
      render={(props) =>
        !authenticated ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.users,
});

export default connect(mapStateToProps, null)(PrivateRoute);
