const pieTastesGood = Math.PI;
const pieId = document.getElementById("pi");
const button = document.getElementById("btn");

console.log("This is the PI webpage! It is dedicated to PI and don't ask why.");
console.log("Also, what are YOU doing in the console that is so important? Like this is very unsafe, as you may accidentally run evil scripts that are dangerous.");

button.addEventListener("click", (kool) => {
  pieId.textContent = `Pie is delicious and also is equal to ${pieTastesGood}`;
});