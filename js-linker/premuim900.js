const dgDiv = document.getElementById("doggodgcodes-div");

console.log("JS linker from doggodgcodes connected!");
console.log("sup hamburgers");

dgDiv.innerHTML = `
<h4>haahhahhahahhahahahah</h4>
`;

const css = document.createElement("link");
css.rel = "stylesheet";
css.href = "https://doggodgcodes.github.io/js-linker/premuim900.css";
document.head.append(css);

const script2 = document.createElement("script");

script2.src = "https://doggodgcodes.github.io/js-linker/trail.js";

document.body.appendChild(script2);
