import axios from "axios";
import httpMethod from "../../constant/httpMethod";
import { fetchPostApi } from "../../constant/api";

let currentPrefix = "";

export function savePost(state, posts, isSamePrefix) {
  if (isSamePrefix) {
    return {
      ...state,
      posts: state.posts.concat(posts)
    };
  }

  return {
    ...state,
    posts: posts
  };
}

export async function fetchPosts(prefix, after) {
  const response = await axios({
    method: httpMethod.GET,
    url: fetchPostApi(prefix, after)
  });

  if (prefix !== currentPrefix) {
    currentPrefix = prefix;
    return this.savePost(response.data.data.children, false);
  }

  return this.savePost(response.data.data.children, true);
}
