import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const mainLayout = (props) => {
  return (
    <>
      <Header />
      <div className="main">{props.children}</div>
      <Footer />
    </>
  );
};

export default mainLayout;
