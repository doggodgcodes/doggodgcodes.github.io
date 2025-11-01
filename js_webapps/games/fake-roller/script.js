const possibleRolls = [
  "Skibidi",
  "Cheezburger",
  "Bussin",
	"Geometry crashed",
	"Bingus",
	"Subscribe",
	"Spooky"
];

function onRoll() {
  const resultPicker = Math.floor(Math.random() * possibleRolls.length);
  const result = possibleRolls[resultPicker];
  document.getElementById("rollContent").textContent = result;
}
