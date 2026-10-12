const p = document.getElementById("output");
let x = 0;
function number() {
  x++;
  p.textContent += x;;
  p.textContent += ", "
  p.scrollTop = p.scrollHeight;
}
setInterval(number, 1);