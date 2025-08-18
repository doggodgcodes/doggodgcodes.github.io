let clicks = 0
function clickFunction() {
  let clicks = clicks++
  document.getElementById("numberValue").textContent = clicks;
}
while true {
  document.getElementById("btnClick").onclick = clickFunction()
}
