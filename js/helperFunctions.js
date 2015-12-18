var attachUrlIcon = function(string, url) {
  var newString = string;
  if (url.slice(-4) === ".pdf") {
    newString += HTMLurlIcon + " [PDF]";
  } else {
    newString += HTMLurlIcon;
  }
  return newString;
}
