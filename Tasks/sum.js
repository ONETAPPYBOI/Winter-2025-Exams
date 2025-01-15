// Refactor following solution
// Sum all numbers from an array

const sumNumbers = (arr) => {
  let total = 0;

  for (const element of arr) {
    if (typeof element === "number") {
      total += element;
    }
  }

  return total;
};

module.exports = sumNumbers;
