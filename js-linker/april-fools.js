window.addEventListener("load", () => {
  const today = new Date();

  // April = 3 (months are 0-based: Jan = 0)
if (today.getMonth() === 3 && today.getDate() === 1) {

const glitchCss = document.createElement("link");
glitchCss.rel = "stylesheet";
glitchCss.href = "https://doggodgcodes.github.io/mine-chicken-dg/css-mine-chicken/glitchazon.css";
document.head.appendChild(glitchCss);
document.title = "⚠️ CRITICAL FOOLING IN PROGRESS ⚠️";

console.log("get fooled for april fools haha");
document.body.innerHTML = `
  <img src="https://doggodgcodes.github.io/assets/prank/invalid.png" style="width: 50vw; height: 50vh; object-fit: cover;">
  <h1>APRIL FOOLS DINGUS HAHAHAHAHAHHAHAHAHAHAHAHAHHAHAH</h1>
  `;
}
});
