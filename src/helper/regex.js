export const isJpgUrl = url => {
  const pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
  const regex = new RegExp(pattern);

  return regex.test(url);
};
