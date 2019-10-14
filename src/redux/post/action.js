import axios from "axios";
import httpMethod from "../../constant/httpMethod";
import { fetchPostUrl } from "../../constant/api";
import { last } from "lodash";

export function savePost(state, { posts, after, isLoadmore }) {
  if (isLoadmore) {
    return {
      ...state,
      posts: state.posts.concat(posts),
      after: after
    };
  }

  return {
    ...state,
    posts: posts,
    after: after
  };
}

const responseObject = (posts, after, isLoadmore) => {
  return {
    posts: posts,
    after: after,
    isLoadmore: isLoadmore
  };
};

async function fetchPostApi(prefix, after) {
  const response = await axios({
    method: httpMethod.GET,
    url: fetchPostUrl(prefix, after)
  });

  return response.data.data.children;
}

export async function fetchPosts({ prefix, after }) {
  const data = await fetchPostApi(prefix, after);

  return this.savePost(responseObject(data, last(data).data.name, false));
}

export async function loadMore({ prefix, after }) {
  const data = await fetchPostApi(prefix, after);

  return this.savePost(responseObject(data, last(data).data.name, true));
}
