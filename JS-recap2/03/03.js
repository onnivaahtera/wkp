const numbers = new Array();
const evenNums = new Array();

while (true) {
  const num = prompt("Enter a number (or 'done' to finish): ");
  if (num === "done") {
    break;
  }
  numbers.push(parseInt(num));
}

for (let n of numbers) {
  if (n % 2 === 0) {
    evenNums.push(n);
  }
}

document.querySelector("#target").innerHTML = `Even Numbers: ${
  evenNums.length === 0 ? "None" : evenNums
}`;
