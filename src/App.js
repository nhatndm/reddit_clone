import React, { Component, Fragment } from "react";
import Header from "./layout/header";
import RouteComponent from "./layout/route";
import Navbar from "./layout/navbar";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Navbar />
        <RouteComponent />
      </Fragment>
    );
  }
}
