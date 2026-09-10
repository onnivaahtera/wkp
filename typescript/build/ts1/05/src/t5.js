// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    return value ** 2;
}
// Prompt the user to enter a value as either a string or a number
const userInput = prompt('Value as a string or a number');
const parsedValue = !userInput
    ? 'No User Input'
    : userInput !== '' && !isNaN(Number(userInput))
        ? Number(userInput)
        : userInput;
// Call the lengthOrSquare function
const result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
export {};
