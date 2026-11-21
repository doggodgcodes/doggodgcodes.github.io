const CounterDisplay = document.getElementById("counter");
let array = ["item"];

function loop() {
  CounterDisplay.innerText = `length of array (WE LOVE YOUR RAM, SERVE US MORE DISHES OF RAM): ${array.length}`;
  array += "qwertyuiopasdfghjklzxcvbnm1234567890";
  loop();
}