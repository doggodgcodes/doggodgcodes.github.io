document.addEventListener('DOMContentLoaded', function() {

// ULTRA SILLY VIBES - JavaScript Chaos Engine

const crazyBtn = document.getElementById('crazyBtn');
const moreBtn = document.getElementById('moreBtn');
const resetBtn = document.getElementById('resetBtn');
const chaosText = document.getElementById('chaosText');
const chaosZone = document.getElementById('chaosZone');

// Array of silly messages
const sillyMessages = [
    "🍌 A QUANTUM BANANA JUST ACHIEVED SENTIENCE! 🍌",
    "🍝 SPAGHETTI DETECTED IN 47 DIMENSIONS! 🍝",
    "⚡ CHAOS LEVEL INCREASED BY 300%! ⚡",
    "🎪 YOUR SHOES JUST FILED FOR INDEPENDENCE! 🎪",
    "🌀 GRAVITY HAS TEMPORARILY REVERSED! 🌀",
    "🔮 THE SQUIRRELS ARE COMMUNICATING! 🔮",
    "👽 ALIENS JUST ORDERED EXTRA MARINARA! 👽",
    "💫 TIME HAS BECOME A FLAVOR (TASTES LIKE PURPLE)! 💫",
    "🎭 REALITY CHECK: YOU'RE ACTUALLY A FICTIONAL CHARACTER! 🎭",
    "✨ BANANAS AND SPAGHETTI JUST GOT MARRIED! ✨",
    "🚀 WE ARE ALL INTERDIMENSIONAL BEINGS! 🚀",
    "🎪 HONK! (that was the honking button) 🎪",
    "🍌 SOMEWHERE, A BANANA IS READING THIS ABOUT YOU! 🍌",
    "🌊 THE OCEAN JUST CALLED, IT WANTS ITS WATER BACK! 🌊",
    "🎯 YOU HAVE BEEN RANDOMLY SELECTED FOR EXTRA SILLINESS! 🎯"
];

let clickCount = 0;
let moreClickCount = 0;

// Crazy Button - Random Chaos
crazyBtn.addEventListener('click', function() {
    clickCount++;
    
    // Random silly message
    const randomMessage = sillyMessages[Math.floor(Math.random() * sillyMessages.length)];
    chaosText.textContent = randomMessage;
    
    // Add spinning animation
    chaosZone.classList.add('spinning');
    setTimeout(() => chaosZone.classList.remove('spinning'), 1000);
    
    // Change chaos zone background
    const hue = Math.random() * 360;
    chaosZone.style.filter = `hue-rotate(${hue}deg)`;
    
    // Special easter eggs at certain click counts
    if (clickCount === 5) {
        alert("🎪 You've unlocked CHAOS LEVEL 1! 🎪\nThe bananas are pleased with your dedication.");
    }
    
    if (clickCount === 10) {
        alert("🌀 CHAOS LEVEL 2 UNLOCKED! 🌀\nYou can now speak to invisible squirrels. (They don't listen though)");
    }
    
    if (clickCount === 20) {
        alert("⚡ MAXIMUM CHAOS ACHIEVED! ⚡\nYou have become one with the spaghetti. This is your life now.");
        createConfetti();
    }
    
    // Shake effect
    document.body.style.transform = `rotate(${(Math.random() - 0.5) * 2}deg)`;
    setTimeout(() => document.body.style.transform = 'rotate(0deg)', 100);
});

// More Button - Additional nonsense
moreBtn.addEventListener('click', function() {
    moreClickCount++;
    
    // Create flying text
    const funnyPhrase = [
        "🍌 QUANTUM BANANA ACHIEVED! 🍌",
        "🍝 SPAGHETTI PROTOCOL ACTIVATED! 🍝",
        "✨ EXTRA SILLY MODE! ✨",
        "🎪 CHAOS ENGAGED! 🎪",
        "🚀 DIMENSIONAL TRAVEL INITIATED! 🚀"
    ][Math.floor(Math.random() * 5)];
    
    createFloatingText(funnyPhrase);
    
    // Pulse effect
    chaosZone.classList.add('pulsing');
    setTimeout(() => chaosZone.classList.remove('pulsing'), 500);
    
    if (moreClickCount === 3) {
        chaosText.textContent += "\n(Are you okay? Do you need help? The bananas are watching.)";
    }
});

// Reset Button - Restore sanity (sort of)
resetBtn.addEventListener('click', function() {
    clickCount = 0;
    moreClickCount = 0;
    chaosText.textContent = "CLICK THE BUTTON ABOVE TO UNLEASH CHAOS!";
    chaosZone.style.filter = 'hue-rotate(0deg)';
    document.body.style.transform = 'rotate(0deg)';
    alert("🔄 REALITY HAS BEEN RESTORED!\n(Or has it? - The sentient bananas)");
});

// Function to create floating text
function createFloatingText(text) {
    const floatingDiv = document.createElement('div');
    floatingDiv.textContent = text;
    floatingDiv.style.position = 'fixed';
    floatingDiv.style.left = Math.random() * window.innerWidth + 'px';
    floatingDiv.style.top = '0px';
    floatingDiv.style.fontSize = '2em';
    floatingDiv.style.fontWeight = 'bold';
    floatingDiv.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    floatingDiv.style.pointerEvents = 'none';
    floatingDiv.style.zIndex = '9999';
    floatingDiv.style.animation = 'float-up 3s ease-out forwards';
    floatingDiv.style.fontFamily = "'Comic Sans MS', cursive";
    floatingDiv.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
    
    document.body.appendChild(floatingDiv);
    
    // CSS animation for floating
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-up {
            0% {
                opacity: 1;
                transform: translateY(0) rotate(0deg) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-500px) rotate(360deg) scale(1.5);
            }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => floatingDiv.remove(), 3000);
}

// Function to create confetti
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = '🍌' || '🍝';
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-20px';
        confetti.style.fontSize = '2em';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `confetti-fall ${2 + Math.random() * 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confetti-fall {
            0% {
                opacity: 1;
                transform: translateY(0) translateX(0) rotate(0deg);
            }
            100% {
                opacity: 0;
                transform: translateY(${window.innerHeight}px) translateX(${(Math.random() - 0.5) * 200}px) rotate(720deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// Keyboard shortcuts for extra chaos
document.addEventListener('keydown', function(event) {
    // Press 'B' for banana chaos
    if (event.key === 'b' || event.key === 'B') {
        chaosText.textContent = "🍌 YOU HAVE SUMMONED THE QUANTUM BANANAS! THEY ARE ARRIVING! 🍌";
        crazyBtn.click();
    }
    
    // Press 'S' for spaghetti chaos
    if (event.key === 's' || event.key === 'S') {
        chaosText.textContent = "🍝 THE SPAGHETTI NETWORK IS NOW ACTIVE! YOU ARE CONNECTED! 🍝";
        createFloatingText("🍝 SPAGHETTI DETECTED! 🍝");
    }
});

// Mouse follow effect (optional fun)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Occasionally create sparkles
    if (Math.random() < 0.02) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = (mouseX + (Math.random() - 0.5) * 30) + 'px';
        sparkle.style.top = (mouseY + (Math.random() - 0.5) * 30) + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.fontSize = '1.5em';
        sparkle.style.animation = 'sparkle-fade 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes sparkle-fade {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
});

// Fun message on load
window.addEventListener('load', function() {
    console.log("🍌 WELCOME TO ULTRA SILLY VIBES! 🍌");
    console.log("🍝 The sentient bananas are watching you through your screen. 🍝");
    console.log("✨ Press 'B' for banana chaos or 'S' for spaghetti chaos! ✨");
    console.log("🎪 Remember: Reality is just a suggestion! 🎪");
});
});
