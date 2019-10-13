import React, { Component } from "react";
import { connect } from "react-redux";

function withPost(Comp, prefix) {
  return class extends Component {
    componentDidMount() {
      this.props.fetchPosts(prefix);
    }
    render() {
      const { posts } = this.props;
      return <Comp dataSource={posts} />;
    }
  };
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts
  };
};

const mapDispatchToProps = ({ post: { fetchPosts } }) => {
  return {
    fetchPosts: (prefix, after) => fetchPosts(prefix, after)
  };
};

export default (Comp, prefix) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withPost(Comp, prefix));
