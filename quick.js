const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const q = urlParams.get('q');
let link = "";
if (q == "minechicken") {
  document.getElementById("quicktext").textContent = "You came from MineChicken's page!";
}
