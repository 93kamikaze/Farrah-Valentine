const noBtn = document.getElementById('noButton');
const yesBtn = document.getElementById('yesButton');
const question = document.getElementById('question');
const mainContent = document.getElementById('main-content');

let yesScale = 1;

// The Runaway Logic
noBtn.addEventListener('mouseover', () => {
    // Calculate random position within the viewport
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.position = 'fixed';

    // Make the Yes button grow every time she tries to click No
    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;
});

// The Success Logic
yesBtn.addEventListener('click', () => {
    // 1. Confetti explosion
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    // 2. Change the content
    question.innerHTML = "Yay! See you on the 14th! 🌹";
    noBtn.style.display = 'none';
    yesBtn.innerHTML = "I'm so excited!";
    yesBtn.style.transform = "scale(1)";
});