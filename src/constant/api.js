export const fetchPostApi = (prefix, after) =>
  `https://www.reddit.com/r/DotA2/${prefix}.json?limit=100&&after=${after}`;
