var attachUrlIcon = function(string, url) {
  var newString = string;
  if (url.slice(-4) === ".pdf") {
    newString += HTMLpdfIcon;
  } else {
    newString += HTMLurlIcon;
  }
  return newString;
}
