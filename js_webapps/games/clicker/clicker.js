const btnClick = document.querySelector("#btnClick");

btnClick.addEventListener("click", clickFunction);
let clicks = 0
function clickFunction() {
clicks++;
  document.getElementById("numberValue").textContent = clicks;
}
document.getElementById("btnClick").onclick = clickFunction;
