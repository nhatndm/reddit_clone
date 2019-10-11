import React, { Component } from "react";
import { ReactComponent as CardViewSvg } from "../../assest/card.svg";
import { ReactComponent as CompactViewSvg } from "../../assest/compact.svg";
import { ReactComponent as ClassicViewSvg } from "../../assest/classic-view.svg";
import { ReactComponent as TopSvg } from "../../assest/top.svg";
import { ReactComponent as HotSvg } from "../../assest/hot.svg";
import { ReactComponent as NewSvg } from "../../assest/new.svg";
import { connect } from "react-redux";
import { find } from "lodash";
import Select from "../../components/select";
import { CARDVIEW, CLASSICVIEW, COMPACTVIEW } from "../../redux/app/type";

import "./index.scss";

class Navbar extends Component {
  state = {
    pages: [
      {
        id: "toppage",
        value: "/top",
        default: false,
        icon: TopSvg,
        text: "Top"
      },
      {
        id: "hotpage",
        value: "/hot",
        default: false,
        icon: HotSvg,
        text: "Hot"
      },
      {
        id: "newpage",
        value: "/new",
        default: false,
        icon: NewSvg,
        text: "New"
      }
    ],

    defaultPage: {}
  };

  componentDidMount() {
    const { pages } = this.state;
    const { router } = this.props;
    const currentPath = router.location.pathname;
    const object = find(pages, v => v.value === currentPath);
    this.setState({ defaultPage: object });
  }

  handleOnClickItem = v => {
    this.setState({ defaultPage: v });
  };

  handleChangeView = view_mode => e => {
    const { changeView } = this.props;
    changeView(view_mode);
  };

  render() {
    const { pages, defaultPage } = this.state;
    const { view_mode } = this.props;

    return (
      <div className="subreddit-navbar">
        <div className="nav-menu">
          <ul
            className={`${
              view_mode === CARDVIEW ? "container" : "container-fluid"
            } nav`}
          >
            <li className="nav-item active">Posts</li>
            <li className="nav-item">New to Dota 2</li>
            <li className="nav-item">Read the FAQ</li>
            <li className="nav-item">Subreddit Rules</li>
          </ul>
        </div>

        <div className="switch-view-nav">
          <ul
            className={`${
              view_mode === CARDVIEW ? "container" : "container-fluid"
            } nav`}
          >
            <li className="nav-item title">VIEW</li>
            <li
              className={`nav-item ${view_mode === CARDVIEW ? "active" : ""}`}
            >
              <CardViewSvg
                height={20}
                width={20}
                onClick={this.handleChangeView(CARDVIEW)}
              />
            </li>
            <li
              className={`nav-item ${
                view_mode === CLASSICVIEW ? "active" : ""
              }`}
            >
              <ClassicViewSvg
                height={20}
                width={20}
                onClick={this.handleChangeView(CLASSICVIEW)}
              />
            </li>
            <li
              className={`nav-item ${
                view_mode === COMPACTVIEW ? "active" : ""
              }`}
            >
              <CompactViewSvg
                height={20}
                width={20}
                onClick={this.handleChangeView(COMPACTVIEW)}
              />
            </li>
            <li>
              <Select
                showTitle
                title="SORT"
                data={pages}
                defaultItem={defaultPage}
                onClickItem={this.handleOnClickItem}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    router: state.router,
    view_mode: state.app.view_mode
  };
};

const mapDispatchToProps = ({ app: { changeView } }) => {
  return {
    changeView: view_mode => changeView(view_mode)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
