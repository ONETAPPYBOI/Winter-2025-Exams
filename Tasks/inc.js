// Refactor following solution
// Increment all numbers in dictionary

const incNumbers = (formatComplete) => {
  const updatedObject = {};

  for (const key of Object.keys(formatComplete)) {
    const value = formatComplete[key];
    updatedObject[key] = typeof value === "number" ? value + 1 : value;
  }

  return updatedObject;
};

module.exports = incNumbers;
