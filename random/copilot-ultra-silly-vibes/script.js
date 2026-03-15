document.addEventListener('DOMContentLoaded', function() {
  const crazyBtn = document.getElementById('crazyBtn');
  const moreBtn = document.getElementById('moreBtn');
  const resetBtn = document.getElementById('resetBtn');
  const chaosText = document.getElementById('chaosText');
  const chaosZone = document.getElementById('chaosZone');

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

  // Create global keyframes only once
  const globalStyle = document.createElement('style');
  globalStyle.textContent = `
    @keyframes float-up {
      0% { opacity: 1; transform: translateY(0) rotate(0deg) scale(1); }
      100% { opacity: 0; transform: translateY(-500px) rotate(360deg) scale(1.5); }
    }
    @keyframes confetti-fall {
      0% { opacity: 1; transform: translateY(0) translateX(0) rotate(0deg); }
      100% { opacity: 0; transform: translateY(${window.innerHeight}px) translateX(0) rotate(720deg); }
    }
    @keyframes sparkle-fade {
      0% { opacity: 1; transform: scale(1); }
      100% { opacity: 0; transform: scale(0); }
    }
  `;
  document.head.appendChild(globalStyle);

  // Crazy Button
  crazyBtn.addEventListener('click', () => {
    clickCount++;
    chaosText.textContent = sillyMessages[Math.floor(Math.random() * sillyMessages.length)];

    chaosZone.classList.add('spinning');
    setTimeout(() => chaosZone.classList.remove('spinning'), 1000);

    chaosZone.style.filter = `hue-rotate(${Math.random() * 360}deg)`;

    if (clickCount === 5) alert("🎪 You've unlocked CHAOS LEVEL 1! 🎪");
    if (clickCount === 10) alert("🌀 CHAOS LEVEL 2 UNLOCKED! 🌀");
    if (clickCount === 20) { alert("⚡ MAXIMUM CHAOS ACHIEVED! ⚡"); createConfetti(); }

    document.body.style.transform = `rotate(${(Math.random() - 0.5) * 2}deg)`;
    setTimeout(() => document.body.style.transform = 'rotate(0deg)', 100);
  });

  // More Button
  moreBtn.addEventListener('click', () => {
    moreClickCount++;
    const phrases = [
      "🍌 QUANTUM BANANA ACHIEVED! 🍌",
      "🍝 SPAGHETTI PROTOCOL ACTIVATED! 🍝",
      "✨ EXTRA SILLY MODE! ✨",
      "🎪 CHAOS ENGAGED! 🎪",
      "🚀 DIMENSIONAL TRAVEL INITIATED! 🚀"
    ];
    createFloatingText(phrases[Math.floor(Math.random() * phrases.length)]);

    chaosZone.classList.add('pulsing');
    setTimeout(() => chaosZone.classList.remove('pulsing'), 500);

    if (moreClickCount === 3)
      chaosText.textContent += "\n(Are you okay? The bananas are watching.)";
  });

  // Reset Button
  resetBtn.addEventListener('click', () => {
    clickCount = 0;
    moreClickCount = 0;
    chaosText.textContent = "CLICK THE BUTTON ABOVE TO UNLEASH CHAOS!";
    chaosZone.style.filter = 'hue-rotate(0deg)';
    document.body.style.transform = 'rotate(0deg)';
    alert("🔄 REALITY HAS BEEN RESTORED!");
  });

  // Floating Text
  function createFloatingText(text) {
    const div = document.createElement('div');
    div.textContent = text;
    div.style.cssText = `
      position: fixed; left: ${Math.random() * window.innerWidth}px; top: 0;
      font-size: 2em; font-weight: bold; color: hsl(${Math.random()*360},100%,50%);
      pointer-events: none; z-index: 9999; font-family: 'Comic Sans MS', cursive;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      animation: float-up 3s ease-out forwards;
    `;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
  }

  // Confetti
  function createConfetti() {
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.textContent = Math.random() < 0.5 ? '🍌' : '🍝';
      confetti.style.cssText = `
        position: fixed; left: ${Math.random()*window.innerWidth}px; top: -20px;
        font-size: 2em; pointer-events: none; z-index: 9999;
        animation: confetti-fall ${2+Math.random()*2}s linear forwards;
      `;
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'b') { chaosText.textContent = "🍌 QUANTUM BANANAS ARRIVE! 🍌"; crazyBtn.click(); }
    if (e.key.toLowerCase() === 's') { chaosText.textContent = "🍝 SPAGHETTI NETWORK ACTIVE! 🍝"; createFloatingText("🍝 SPAGHETTI DETECTED! 🍝"); }
  });

  // Mouse sparkle
  document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.02) {
      const sparkle = document.createElement('div');
      sparkle.textContent = '✨';
      sparkle.style.cssText = `
        position: fixed; left: ${e.clientX + (Math.random()-0.5)*30}px;
        top: ${e.clientY + (Math.random()-0.5)*30}px;
        font-size: 1.5em; pointer-events: none; z-index: 9999;
        animation: sparkle-fade 1s ease-out forwards;
      `;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1000);
    }
  });

  // Welcome
  window.addEventListener('load', () => {
    console.log("🍌 WELCOME TO ULTRA SILLY VIBES! 🍌");
    console.log("🍝 The sentient bananas are watching! 🍝");
    console.log("✨ Press 'B' for banana chaos or 'S' for spaghetti chaos! ✨");
  });
});
