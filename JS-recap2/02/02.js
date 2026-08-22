const numbers = new Array();

for (let i = 1; i <= 5; i++) {
  numbers.push(prompt(`Number: ${i}`));
}

document.querySelector("#numbers").innerHTML = numbers;

const num = prompt("Enter a number to search");

if (numbers.includes(num)) {
  document.querySelector(
    "#search"
  ).innerHTML = `Number ${num} is found in the array.`;
} else {
  document.querySelector(
    "#search"
  ).innerHTML = `Number ${num} is not in the array.`;
}

numbers.pop(-1);

document.querySelector("#newNumbers").innerHTML = `Updated Numbers: ${numbers}`;

numbers.sort((a, b) => a - b);

document.querySelector(
  "#sortedNumbers"
).innerHTML = `Sorted Numbers: ${numbers}`;
