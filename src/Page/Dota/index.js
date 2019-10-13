import React, { Component } from "react";
import { connect } from "react-redux";
import PostItem from "../../components/PostItem";
import { CARDVIEW } from "../../redux/app/type";
import "./index.scss";

const Posts = ({ dataSource, viewMode }) => {
  return dataSource.map(v => (
    <PostItem key={v.data.name} viewMode={viewMode} item={v} />
  ));
};

class DotaPage extends Component {
  render() {
    const { viewMode, posts } = this.props;

    return (
      <div
        className={`dota-page ${
          viewMode === CARDVIEW ? "container" : "container-fluid"
        }`}
      >
        <Posts dataSource={posts} viewMode={viewMode} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    viewMode: state.app.viewMode
  };
};

export default connect(
  mapStateToProps,
  null
)(DotaPage);
