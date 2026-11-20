document.title = "My Projects - DoggoDGCodes' Projects";
console.log("Test log from https://doggodgcodes.github.io/js-linker/minechicken.js");
const script = document.createElement("script");

script.src = "https://doggodgcodes.github.io/js-linker/creative-control.js";

document.body.appendChild(script);
console.log("Appended Creative Control.js");

const line = document.createElement("hr");
const brk = document.createElement("br");
const brk2 = document.createElement("br");


document.body.appendChild(line);

document.body.appendChild(brk);

document.body.appendChild(brk2);
console.log("Appended Horizontal Line");

const div = document.getElementById("doggoProjects");

div.innerHTML = `
<div class="projects">
  <a href="https://doggodgcodes.github.io" target="_blank" class="project-card"><h2 class="project-title">DoggoDGCodes Homepage</h2><p class="project-description" style="color: navy;">Travel to doggodgcodes.github.io to pack a punch made of enjoyability! Games like 98 Clicker, and The Maze are enjoyable experiences for when you get bored (why would you get bored here, it's awesome here) where you can explore every inch or centimeter of it!</p><span class="project-link">View Site →</span></a>
  <a href="https://doggodgcodes.github.io/dogebot/" target="_blank" class="project-card"><h2 class="project-title">Dogebot</h2><p class="project-description" style="color: navy;">Dogebot, the AI that can run ENTIRELY in your browser! On the inaccurate Icosahedron News the reporter is Dogebot. Dogebot runs on over 2000+ lines of code! (partially AI generated)</p><span class="project-link">View Page →</span></a>
  <a href="https://doggodgcodes.github.io/ai/" target="_blank" class="project-card"><h2 class="project-title">DoggoDGCodes AI Page</h2><p class="project-description" style="color: navy;">Explore hilariously random AI creations made by doggodgcodes and others to test your AI detection skills.</p><span class="project-link">View Page →</span></a>
  <a href="https://github.com/doggodgcodes" target="_blank" class="project-card"><h2 class="project-title">DoggoDGCodes Code</h2><p class="project-description" style="color: navy;">Explore doggodgcodes code!</p><span class="project-link">View Page →</span></a>
  <a href="https://github.com/minechicken98" target="_blank" class="project-card"><h2 class="project-title">MineChicken98's Code</h2><p class="project-description" style="color: navy;">Explore minechicken98's code!</p><span class="project-link">View Page →</span></a>
  <a href="https://piano.dallasread.com" target="_blank" class="project-card"><h2 class="project-title">Keyfall</h2><p class="project-description" style="color: navy;">minechicken's piano game where you can play a piano (audio file to MIDI conversion doesn't do a great job mostly).</p><span class="project-link">View Page →</span></a>
  <a href="https://github.com/minechicken98/minechicken98.github.io/issues" target="_blank" class="project-card"><h2 class="project-title">This website's issues</h2><p class="project-description" style="color: navy;">Place to point out bugs and suggest features for games.</p><span class="project-link">View Page →</span></a>
</div>
`;

// <a href="https://doggodgcodes.github.io/random/" target="_blank" class="project-card"><h2 class="project-title">DoggoDGCodes Random Page</h2><p class="project-description" style="color: navy;">Find new favorite webpage! Has a random website picker, that is truly random!</p><span class="project-link">View Page →</span></a>

// document.body.appendChild(div);
// console.log("Appended DoggoDGCodes div");

const link = document.createElement("link");

link.rel = "stylesheet";
link.href = "https://doggodgcodes.github.io/js-linker/css.css";

document.body.appendChild(link);
console.log("Appended CSS");

const script2 = document.createElement("script");

script2.src = "https://doggodgcodes.github.io/js-linker/trail.js";

document.body.appendChild(script2);

console.log("Appended Trail.js");

backgroundGif = "body { background-image: url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjIzaTZ2aDVhbGZmZGxmNjFwa3JvcWNtZDF5MjFuZXRid3hzNTh6YyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9PrqNHPAdWyJVOXntF/giphy.webp'); }";

const gif = document.createElement("style");
gif.textContent = `
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-repeat: repeat;
  background-image: url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnBlbXkweGgyaHUzZThqdjQ3bnNwYjhzaWZlMXUxbHh2OGJiYzJmcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y4nk5bgwpWL6T5Ax9y/giphy.gif');
  z-index: -1;
}
h1, .subtitle { color: white; text-shadow: 0px 0px 10px black; }
.subtitle { font-weight: 600; }
`;
document.head.appendChild(gif);

const brokenElement = document.querySelector("a[href=\"https://youtube.com/@flyingdogwithapencil\"]");

brokenElement.remove();

const linkElement = document.querySelector("a[href=\"https://youtube.com/@nobodyasked67\"]");

linkElement.href = "https://youtube.com/@Tony-the-pet-ghost";

const style = document.createElement("style");

style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Geist+Pixel&display=swap');
body {
  font-family: "Geist Pixel", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
  "ELSH" 0;
  text-shadow:
  1px 1px #883000,
  -1px -1px #008;
}
`;
