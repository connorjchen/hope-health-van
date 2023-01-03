import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import NeedHelpButton from "./needHelpButton";
class NavBarFooterLayout extends React.Component {
  render() {
    return (
      <>
        {window.location.href.includes("booking") && <NeedHelpButton />}
        <NavBar />
        <Outlet />
        <Footer />
      </>
    );
  }
}
export default NavBarFooterLayout;
