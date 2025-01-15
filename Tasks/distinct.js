// Refactor following solution
// Return an array without duplicates

const DISTINCT = (data) => {
  const seen = new Set();
  const result = [];

  for (const item of data) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
};

module.exports = DISTINCT;
