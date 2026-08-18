const c = parseFloat(prompt("Temperature in celsius"));

const f = (c * 9) / 5 + 32;
const k = c + 273.15;

document.querySelector(
  "#target"
).innerHTML = `${c} Celsius is ${f} Fahrenheit and ${k} Kelvin`;

console.log(c, f, k);
