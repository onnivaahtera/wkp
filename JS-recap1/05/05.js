const num = parseInt(prompt("Enter a positive integer"));

for (let i = 0; i <= num; i++) {
  result = (i * (i + 1)) / 2;
}

document.querySelector("#target").innerHTML = `${result}`;
