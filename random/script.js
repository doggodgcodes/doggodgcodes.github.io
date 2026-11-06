const on = false;
if (on == false) {
  let stylesheet = document.createElement("style");
  stylesheet.textContent = 'body { padding: 0; margin: 0; } .warning-banner { background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1yCuOLzX749b1fv392hgSDgKKFjV3_NwLg"); color: blueviolet; font-family: sans-serif; text-shadow: 2px 2px #888; padding: 20px; }';
  document.head.appendChild(stylesheet);
  document.body.innerHTML = '<h1 class="warning-banner">Nope, this page doesn\'t exist anymore.</h1>';
  document.title = "Nope!";
}
