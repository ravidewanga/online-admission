import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { cartCount } = this.props;

    return <h3>Task List ({cartCount})</h3>;
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Header);
