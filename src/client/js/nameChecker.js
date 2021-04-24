function checkForName(baseUrl) {
  console.log("::: Running checkForName :::", baseUrl);
  var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  var regex = new RegExp(expression)
  if (baseUrl.match(regex)) { return true; }
  else { return false };
}

export { checkForName }

