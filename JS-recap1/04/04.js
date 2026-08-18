const score = parseFloat(prompt("Score of course assesment"));

if (score < 40) {
  document.querySelector("#target").innerHTML = `Grade: 0`;
} else if (score >= 40 && score < 52) {
  document.querySelector("#target").innerHTML = `Grade: 1`;
} else if (score >= 52 && score < 64) {
  document.querySelector("#target").innerHTML = `Grade: 2`;
} else if (score >= 64 && score < 76) {
  document.querySelector("#target").innerHTML = `Grade: 3`;
} else if (score >= 76 && score < 88) {
  document.querySelector("#target").innerHTML = `Grade: 4`;
} else {
  document.querySelector("#target").innerHTML = `Grade: 5`;
}
