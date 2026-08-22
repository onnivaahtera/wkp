const arr = [2, 7, 1, 12, 77, 43];
console.log(`Original array: ${arr}`);

const sortArray = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(`Sorted array: ${sortArray(arr)}`);
