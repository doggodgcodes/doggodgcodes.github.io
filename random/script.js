const on = false;
if (on == false) {
  let stylesheet = document.createElement("style");
  stylesheet.textContent = 'body { padding: 0; margin: 0; } .warning-banner { background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1yCuOLzX749b1fv392hgSDgKKFjV3_NwLg"); color: blueviolet; font-family: sans-serif; text-shadow: 2px 2px darkslateblue; padding: 20px; } .link-nope { margin: 25px; font-family: sans-serif; } .link-nope:hover { margin: 30px; }';
  document.head.appendChild(stylesheet);
  document.body.innerHTML = '<h1 class="warning-banner">Nope, this page doesn\'t exist anymore.</h1><a href="/" class="link-nope">&gt; Main page</a>';
  document.title = "Nope!";
}
