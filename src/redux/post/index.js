import { savePost, fetchPosts } from "./action";

export default {
  state: {
    posts: []
  },
  reducers: {
    savePost
  },
  effects: {
    fetchPosts
  }
};
