const num = parseInt(prompt("Enter a positive integer"));
let table = document.getElementById("target");

for (let row = 1; row <= num; row++) {
  let tr = document.createElement("tr");
  for (let col = 1; col <= num; col++) {
    let product = row * col;
    let td = document.createElement("td");
    td.textContent = product;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
