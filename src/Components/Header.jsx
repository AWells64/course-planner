import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

  // componentDidMount() {
  //       this.props.onLoad()
  //   }

  render() {
    const { header, loggedIn, logOut } = this.props;
    return (
      <Fragment>
        <div style={headerDiv}>
          <h2 style={mainHeader}>Dev Course Planner</h2>
          { loggedIn ?
            <Link to={"/"}>
            <button onClick={logOut} style={LogoutButton} className="btn btn-danger btn-sm">Logout</button>
            </Link>
            : null
          } 
        </div>
        <hr style={hrStyle} />
      </Fragment>
      )
  };
}

const mainHeader = {
  fontFamily: 'Bitter',
  textAlign: "center",
  color: "white",
  width: "85%",
  float: "left",
  marginBottom: 20,
};

const headerDiv = {
  backgroundColor: "#181819",
  height: 70,
  paddingBottom: 10,
  marginTop: 23,
  paddingLeft: 90,
  borderRadius: 1,
  boxShadow: '0px 2px 10px 1px rgba(0,0,0,0.75)',
  // alignItems: "center",
  // justifyContent: "center",
};

const LogoutButton = {
  float: 'right',
  marginTop: 19,
  marginRight: 20,
}

const hrStyle = {
    border: 0,
    height: 0, /* Firefox... */
    boxShadow: "0 0 8px 1px black",
    width: "99%",
};


export default Header;