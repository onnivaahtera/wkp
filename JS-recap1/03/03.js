const s1 = parseFloat(prompt("Side 1 of triangle"));
const s2 = parseFloat(prompt("Side 2 of triangle"));
const s3 = parseFloat(prompt("Side 3 of triangle"));

if (s1 === s2 && s1 === s3) {
  document.querySelector("#target").innerHTML = `Triangle is equilateral`;
} else if (s1 === s2 || s1 === s3) {
  document.querySelector("#target").innerHTML = `Triangle is isosceles`;
} else {
  document.querySelector("#target").innerHTML = `Triangle is scalene`;
}
