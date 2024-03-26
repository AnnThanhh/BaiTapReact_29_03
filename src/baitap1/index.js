import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Carousel from "./carousel";

class Baitap1 extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container px-lg-5">
          <Carousel />
        </div>
        <div className="container px-lg-5 pt-5">
          <Content />
        </div>
        <Footer />
      </>
    );
  }
}
export default Baitap1;
