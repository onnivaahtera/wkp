const arr = [2, 7, 1, 12, 77, 43];
console.log(`Original array: ${arr}`);

const sortArray = (arr, order) => {
  if (order === "asc") {
    return arr.sort((a, b) => a - b);
  } else if (order === "desc") {
    return arr.sort((a, b) => b - a);
  }
};

console.log(`Sorted array: ${sortArray(arr, "asc")}`);
console.log(`Sorted array: ${sortArray(arr, "desc")}`);
