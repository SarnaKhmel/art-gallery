import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content-body">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
