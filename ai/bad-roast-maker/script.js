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
  if (Math.random() > 0.7) roast.unshift("you");
if (Math.random() < 0.05) {
  document.getElementById("output").textContent =
    "you absolute microwave energy";
  return;
}
  document.getElementById("output").textContent = roast.join(" ");
}
