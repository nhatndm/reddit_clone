import axios from "axios";
import httpMethod from "../../constant/httpMethod";
import { fetchPostApi } from "../../constant/api";

export function savePost(state, posts) {
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

  this.savePost(response.data.data.children);
}
