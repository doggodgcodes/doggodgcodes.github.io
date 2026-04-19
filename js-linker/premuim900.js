const dgDiv = document.getElementById("doggodgcodes-div");

console.log("JS linker from doggodgcodes connected!");
console.log("sup hamburgers");

dgDiv.innerHTML = `
<h4>Premuim900</h4>
`;

const css = document.createElement("link");
css.rel = "stylesheet";
css.href = "https://doggodgcodes.github.io/js-linker/premuim900.css";
document.head.append(css);

const css2 = document.createElement("link");
css2.rel = "stylesheet";
css2.href = "https://doggodgcodes.github.io/mine-chicken-dg/app.css";
document.head.append(css2);

const css3 = document.createElement("link");
css3.rel = "stylesheet";
css3.href = "https://doggodgcodes.github.io/mine-chicken-dg/homepage.css";
document.head.append(css3);

const script2 = document.createElement("script");

script2.src = "https://doggodgcodes.github.io/js-linker/trail.js";

document.body.appendChild(script2);

const div = document.createElement("div");

div.innerHTML = `
<div class="container"><h1>DoggoDGCodes Section</h1>
<p class="subtitle">*this section was injected into homepage</p>
<div class="projects">
<a href="https://doggodgcodes.github.io" target="_blank" class="project-card"><h2 class="project-title">DoggoDGCodes Homepage</h2><p class="project-description" style="color: navy;">Travel to doggodgcodes.github.io to pack a punch made of enjoyability! Games like 98 Clicker, and The Maze are enjoyable experiences for when you get bored (why would you get bored here, it's awesome here) where you can explore every inch or centimeter of it!</p><span class="project-link">View Site →</span></a>
<a href="https://doggodgcodes.github.io/ai/" target="_blank" class="project-card"><h2 class="project-title">DoggoDGCodes AI Page</h2><p class="project-description" style="color: navy;">Explore hilariously random AI creations made by doggodgcodes and others to test your AI detection skills.</p><span class="project-link">View Page →</span></a>
<a href="https://github.com/doggodgcodes" target="_blank" class="project-card"><h2 class="project-title">DoggoDGCodes Code</h2><p class="project-description" style="color: navy;">Explore doggodgcodes code!</p><span class="project-link">View Page →</span></a>
<a href="https://github.com/minechicken98" target="_blank" class="project-card"><h2 class="project-title">MineChicken98's Code</h2><p class="project-description" style="color: navy;">Explore minechicken98's code!</p><span class="project-link">View Page →</span></a>
<a href="https://doggodgcodes.github.io/random/" target="_blank" class="project-card"><h2 class="project-title">DoggoDGCodes Random Page</h2><p class="project-description" style="color: navy;">Find new favorite webpage! Has a random website picker, that is truly random!</p><span class="project-link">View Page →</span></a>
<img class="dg-fbar-img" src="https://i.chzbgr.com/full/10555248128/hEA6A8B63/will-open-this-coca-co-1127">
<img class="dg-fbar-img" src="https://doggodgcodes.github.io/assets/memes/tony.jpg">
<img class="dg-fbar-img" src="https://doggodgcodes.github.io/assets/memes/cat.png">
</div>
</div>
`;



document.body.appendChild(div);
