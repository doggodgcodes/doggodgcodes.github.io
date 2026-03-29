(function() {
    // 1. Updated CSS with a "wobble" animation
  // trail by gemini
    const style = document.createElement('style');
    style.textContent = `
        .click-popup {
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            animation: wobbleUpFade 0.5s ease-out forwards;
        }

        @keyframes wobbleUpFade {
            0% {
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 1;
            }
            25% {
                transform: translateY(-12px) translateX(-5px) rotate(-5deg);
            }
            50% {
                transform: translateY(-25px) translateX(5px) rotate(5deg);
            }
            75% {
                transform: translateY(-37px) translateX(-3px) rotate(-2deg);
            }
            100% {
                transform: translateY(-50px) translateX(0) rotate(0deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    document.addEventListener('click', function(e) {
        const img = document.createElement('img');
        
        // Randomize size (5px to 25px)
        const size = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
        
        img.src = "https://doggodgcodes.github.io/assets/memes/Thumbs%20up%20guy!.png";
        img.className = 'click-popup';
        
        // Styling and positioning
        img.style.width = size + 'px';
        img.style.height = 'auto';
        img.style.left = (e.clientX - size / 2) + 'px';
        img.style.top = (e.clientY - size / 2) + 'px';

        document.body.appendChild(img);

        // Cleanup
        setTimeout(() => {
            img.remove();
        }, 500);
    });
})();
