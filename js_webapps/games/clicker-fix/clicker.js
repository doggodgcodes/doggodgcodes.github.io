const btnClick = document.getElementById("btnClick");

btnClick.addEventListener("click", clickFunction);
let clicks = 0

function clickFunction() {
clicks++;
  document.getElementById("numberValue").textContent = clicks;
}
