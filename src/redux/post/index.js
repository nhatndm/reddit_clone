import { savePost, fetchPosts, loadMore } from "./action";

export default {
  state: {
    posts: [],
    after: ""
  },
  reducers: {
    savePost
  },
  effects: {
    fetchPosts,
    loadMore
  }
};
