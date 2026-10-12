const p = document.getElementById("output");
let x = 0;
function number() {
  x++;
  p.textContent += x;
  p.textContent += ", "
}
setInterval(number, 1);