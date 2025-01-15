// Refactor following solution
// Replace substring with newstr

const replaceSubstring = (str, substr, newstr) => {
  if (substr === "") {
    return str;
  }

  let source = str;
  let result = "";

  while (true) {
    const index = source.indexOf(substr);
    if (index === -1) {
      result += source;
      break;
    }

    result += source.substring(0, index) + newstr;
    source = source.substring(index + substr.length);
  }

  return result;
};

module.exports = replaceSubstring;
