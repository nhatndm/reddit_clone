export const fetchPostUrl = (prefix, after) =>
  `https://www.reddit.com/r/DotA2/${prefix}.json?limit=20&&after=${after}`;
