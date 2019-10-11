import React, { Component } from "react";
import { ReactComponent as CardViewSvg } from "../../assest/card.svg";
import { ReactComponent as CompactViewSvg } from "../../assest/compact.svg";
import { ReactComponent as ClassicViewSvg } from "../../assest/classic-view.svg";

import "./index.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className="subreddit-navbar">
        <div className="nav-menu">
          <ul className="container nav">
            <li className="nav-item active">Posts</li>
            <li className="nav-item">New to Dota 2</li>
            <li className="nav-item">Read the FAQ</li>
            <li className="nav-item">Subreddit Rules</li>
          </ul>
        </div>

        <div className="switch-view-nav">
          <ul className="container nav">
            <li className="nav-item active">View</li>
            <li className="nav-item active">
              <CardViewSvg height={20} width={20} />
            </li>
            <li className="nav-item">
              <ClassicViewSvg height={20} width={20} />
            </li>
            <li className="nav-item">
              <CompactViewSvg height={20} width={20} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
