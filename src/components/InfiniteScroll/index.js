import React, { Component } from "react";
import Loading from "../Loading";

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
    await this.props.action();
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  render() {
    const {
      state: { isLoading },
      props: { children }
    } = this;
    return (
      <div>
        {children} <Loading isLoading={isLoading} />
      </div>
    );
  }
}
