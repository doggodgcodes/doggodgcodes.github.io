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

const div = document.createElement("div");

div.innerHTML = `
<div class="container"><h1>DoggoDGCodes Section</h1>
<p class="subtitle">*this section was injected into homepage</p>
<div class="projects">
<a href="https://doggodgcodes.github.io" class="project-card"><h2 class="project-title">DoggoDGCodes Homepage</h2><p class="project-description" style="color: navy;">Travel to doggodgcodes.github.io to pack a punch made of enjoyability! Games like 98 Clicker, and The Maze are enjoyable experiences for when you get bored (why would you get bored here, it's awesome here) where you can explore every inch or centimeter of it!</p><span class="project-link">View Site →</span></a>
<a href="https://doggodgcodes.github.io/ai/" class="project-card"><h2 class="project-title">DoggoDGCodes AI Page</h2><p class="project-description" style="color: navy;">Explore hilariously random AI creations made by doggodgcodes and others to test your AI detection skills.</p><span class="project-link">View Page →</span></a>
<a href="https://github.com/doggodgcodes" class="project-card"><h2 class="project-title">DoggoDGCodes Code</h2><p class="project-description" style="color: navy;">Explore doggodgcodes code!</p><span class="project-link">View Page →</span></a>
<a href="https://github.com/minechicken98" class="project-card"><h2 class="project-title">MineChicken98's Code</h2><p class="project-description" style="color: navy;">Explore minechicken98's code1</p><span class="project-link">View Page →</span></a>
<img class="dg-fbar-img" src="https://i.chzbgr.com/full/10555248128/hEA6A8B63/will-open-this-coca-co-1127">
<img class="dg-fbar-img" src="https://doggodgcodes.github.io/assets/memes/tony.jpg">
<img class="dg-fbar-img" src="https://doggodgcodes.github.io/assets/memes/cat.png">
</div>
</div>
`;



document.body.appendChild(div);
console.log("Appended DoggoDGCodes div");

const link = document.createElement("link");

link.rel = "stylesheet";
link.href = "https://doggodgcodes.github.io/js-linker/css.css";

document.body.appendChild(link);
console.log("Appended CSS");

const script2 = document.createElement("script");

script2.src = "https://doggodgcodes.github.io/js-linker/trail.js";

document.body.appendChild(script2);

console.log("Appended Trail.js");
