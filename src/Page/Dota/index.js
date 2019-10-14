import React, { Component } from "react";
import PostItem from "../../components/PostItem";
import { CARDVIEW } from "../../redux/app/type";
import "./index.scss";
import InfiniteScroll from "../../components/InfiniteScroll";

const Posts = ({ dataSource, viewMode }) => {
  return dataSource.map(v => (
    <PostItem key={v.data.name} viewMode={viewMode} item={v} />
  ));
};

export default class DotaPage extends Component {
  constructor(props) {
    super(props);
    this.handleAction = this.handleAction.bind(this);
  }

  handleAction() {
    const { loadMore } = this.props;
    return loadMore();
  }

  render() {
    const { viewMode, dataSource } = this.props;
    return (
      <InfiniteScroll action={this.handleAction}>
        <div
          className={`dota-page ${
            viewMode === CARDVIEW ? "container" : "container-fluid"
          }`}
        >
          <Posts dataSource={dataSource} viewMode={viewMode} />
        </div>
      </InfiniteScroll>
    );
  }
}
