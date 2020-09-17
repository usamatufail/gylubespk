import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const { body, documentElement } = document;
      if (body) {
        document.body.scrollTop = 0;
      } else if (documentElement) {
        document.documentElement.scrollTop = 0;
      }
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
