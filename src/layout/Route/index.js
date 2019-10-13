import React, { Component } from "react";
import DotaPage from "../../Page/Dota";
import { Switch, Route } from "react-router-dom";
import withPost from "../../hoc/withPostHoc";

export default class RouteComponent extends Component {
  state = {
    routes: [
      {
        id: "homepage",
        exact: true,
        path: "/",
        prefix: "hot",
        component: DotaPage
      },
      {
        id: "homepage",
        exact: true,
        path: "/hot",
        prefix: "hot",
        component: DotaPage
      },
      {
        id: "toppage",
        exact: false,
        path: "/top",
        prefix: "top",
        component: DotaPage
      },
      {
        id: "newpage",
        exact: false,
        path: "/new",
        prefix: "new",
        component: DotaPage
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
            component={withPost(v.component, v.prefix)}
          ></Route>
        ))}
      </Switch>
    );
  }
}
