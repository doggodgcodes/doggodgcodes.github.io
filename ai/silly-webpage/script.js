const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call fake spaghetti? An impasta.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "How do you organize a space party? You planet.",
    "Why can’t you give Elsa a balloon? Because she will let it go."
];

const mysteries = [
    "Did you know? Potatoes are just underground clouds.",
    "Your horoscope today: Expect the unexpected, unless you don’t.",
    "Fact: The average person laughs 13 times a day. After visiting this site, make that 14.",
    "Why is the sky blue? Because it doesn’t want to be green."
];

function tellJoke() {
    const jokeDisplay = document.getElementById('jokeDisplay');
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeDisplay.textContent = randomJoke;
    jokeDisplay.style.display = 'block';
}

window.onload = function() {
    const mysteryText = document.getElementById('mysteryText');
    mysteryText.textContent = mysteries[Math.floor(Math.random() * mysteries.length)];
};

console.log("You snoopin around in the console?")
console.log("You should not be in the console.")
console.log("Fine.")
console.log("You asked for it.")
console.log("Click this -> https://doggodgcodes.github.io/rickroll/")
