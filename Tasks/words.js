// Refactor following solution
// Count words in a string

const countWords = (str) => {
  const trimmed = str.trim();

  if (!trimmed) {
    return 0;
  }

  const words = trimmed.split(/\s+/);
  return words.length;
};

module.exports = countWords;
