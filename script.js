const noBtn = document.getElementById('noButton');
const yesBtn = document.getElementById('yesButton');
const body = document.body;

// 1. Create various sizes of bees
function createBees() {
    for (let i = 0; i < 15; i++) {
        let bee = document.createElement('div');
        bee.className = 'bee';
        bee.innerText = '🐝';
        
        // Random sizes (small to large)
        const size = Math.random() * (40 - 15) + 15;
        bee.style.fontSize = `${size}px`;
        
        // Random vertical position
        bee.style.top = Math.random() * 100 + 'vh';
        
        // Random speed and delay
        bee.style.animationDuration = (Math.random() * 8 + 5) + 's';
        bee.style.animationDelay = (Math.random() * 10) + 's';
        
        body.appendChild(bee);
    }
}
createBees();

// 2. The "Runner" No Button logic (Proximity-based)
window.addEventListener('mousemove', (e) => {
    const btnRect = noBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;
    
    // Calculate distance between mouse and button center
    const distance = Math.sqrt(
        Math.pow(e.clientX - btnCenterX, 2) + 
        Math.pow(e.clientY - btnCenterY, 2)
    );

    // If mouse gets within 120px, move the button
    if (distance < 120) {
        const x = Math.random() * (window.innerWidth - btnRect.width);
        const y = Math.random() * (window.innerHeight - btnRect.height);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }
});

// 3. Success Celebration
yesBtn.addEventListener('click', () => {
    // Change Message
    document.getElementById('question').innerHTML = "un-bee-leivable, see you tomorrow at 4:30 my baby Farrah 🐝❤️";
    
    // Hide Buttons
    document.querySelector('.buttons').style.display = 'none';
    
    // Trigger Party Lights
    body.classList.add('party-mode');
    
    // Trigger Fireworks (multiple confetti bursts)
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
});
