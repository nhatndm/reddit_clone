import React, { Component } from "react";

export default class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };

    this.asyncAction = this.asyncAction.bind(this);

    window.onscroll = () => {
      const { isLoading } = this.state;

      if (isLoading) return;

      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.asyncAction();
      }
    };
  }

  async asyncAction() {
    await this.setState({ isLoading: true });
    await setTimeout(() => this.props.action(), 2000);
    await this.setState({ isLoading: false });
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
