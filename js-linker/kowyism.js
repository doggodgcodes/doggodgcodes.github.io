console.log("doggodgcodes script loaded");
// let iframe = document.createElement("iframe");
// iframe.src = "https://minechicken98.github.io/pokemon-frost/";
// document.body.appendChild(iframe);
const button = document.createElement("button");
button.onclick = () => { document.querySelector('link').remove(); };
button.innerText = "Click to remove CSS";
document.body.appendChild(button);
