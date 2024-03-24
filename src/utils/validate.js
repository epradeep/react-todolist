export const checkValidData = (todoName) => {
  // /^([a-zA-Z0-9 _-]+)$/;
  const istodoNameValid = /^([a-zA-Z0-9 _-]{2,32})$/.test(todoName);

  if (!istodoNameValid) return "Todo name is not valid";

  return null;
};
