import React, { Component } from "react";
import { connect } from "react-redux";

function withPost(Comp, prefix) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
      this.props.fetchPosts({ prefix: prefix });
    }

    loadMore() {
      const { loadMore, after } = this.props;
      loadMore({ prefix: prefix, after: after });
    }

    render() {
      const { posts, viewMode } = this.props;
      return (
        <Comp dataSource={posts} viewMode={viewMode} loadMore={this.loadMore} />
      );
    }
  };
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    viewMode: state.app.viewMode,
    after: state.post.after
  };
};

const mapDispatchToProps = ({ post: { fetchPosts, loadMore } }) => {
  return {
    fetchPosts: payload => fetchPosts(payload),
    loadMore: payload => loadMore(payload)
  };
};

export default (Comp, prefix) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withPost(Comp, prefix));
