import React, { Component } from "react";
import HotPage from "../../page/hot";
import TopPage from "../../page/top";
import NewPage from "../../page/new";
import { Switch, Route } from "react-router-dom";

export default class RouteComponent extends Component {
  state = {
    routes: [
      {
        id: "homepage",
        exact: true,
        path: "/",
        component: HotPage
      },
      {
        id: "homepage",
        exact: true,
        path: "/hot",
        component: HotPage
      },
      {
        id: "toppage",
        exact: false,
        path: "/top",
        component: TopPage
      },
      {
        id: "newpage",
        exact: false,
        path: "/new",
        component: NewPage
      }
    ]
  };

  render() {
    const { routes } = this.state;
    return (
      <Switch>
        {routes.map(v => (
          <Route
            key={v.id}
            exact={v.exact}
            path={v.path}
            component={v.component}
          ></Route>
        ))}
      </Switch>
    );
  }
}
