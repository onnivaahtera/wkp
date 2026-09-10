const reverseArray = <T>(arr: Array<T>): Array<T> => {
  return arr.reverse();
};

const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ['apple', 'banana', 'cherry', 'date'];
const mixedArray: (string | number | boolean)[] = [true, 42, 'hello', false];

console.log(reverseArray(numberArray));
console.log(reverseArray(stringArray));
console.log(reverseArray(mixedArray));
