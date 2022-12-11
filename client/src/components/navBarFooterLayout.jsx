import React from "react";
// import NavBar from "./navBar";
// import Footer from "./footer";
import { Outlet } from "react-router-dom";
class NavBarFooterLayout extends React.Component {
  render() {
    return (
      <>
        {/* <NavBar /> */}
        <div>NavBar</div>
        <Outlet />
        {/* <Footer /> */}
        <div>Footer</div>
      </>
    );
  }
}
export default NavBarFooterLayout;
