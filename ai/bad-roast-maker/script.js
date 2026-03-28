const words = [
  "you", "banana", "chair", "dusty", "wifi", "goblin",
  "socks", "brain", "fog", "potato", "energy", "cereal",
  "awkward", "spoon", "keyboard", "mystery", "soup",
  "gravity", "noodle", "error", "vibes", "cheese",
  "lamp", "confused", "pickle", "toaster", "juice",
  "beige", "gremlin", "static", "crumbs", "fortnite", "battlepass", "yoooooo"
];

function generateRoast() {
  let roastLength = Math.floor(Math.random() * 6) + 5; // 5–10 words
  let roast = [];

  for (let i = 0; i < roastLength; i++) {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    roast.push(randomWord);
  }

  document.getElementById("output").textContent = roast.join(" ");
}
