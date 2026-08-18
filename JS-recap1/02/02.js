const x1 = parseFloat(prompt("Enter x-coordinate of the first point:"));
const y1 = parseFloat(prompt("Enter y-coordinate of the first point:"));

const x2 = parseFloat(prompt("Enter x-coordinate of the second point:"));
const y2 = parseFloat(prompt("Enter y-coordinate of the second point:"));

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

document.querySelector(
  "#target"
).innerHTML = `Distance between 2 points is ${distance}`;
