import React, { Component, Fragment } from "react";
import Header from "./layout/Header";
import RouteComponent from "./layout/Route";
import Navbar from "./layout/Navbar";

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
