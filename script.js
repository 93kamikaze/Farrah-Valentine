const noBtn = document.getElementById('noButton');
const yesBtn = document.getElementById('yesButton');

// 1. Logic to make the "No" button run away
noBtn.addEventListener('mouseover', () => {
    // Get random coordinates
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // Apply position
    noBtn.style.position = 'fixed'; // Breaks it out of the container to move anywhere
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. Add floating bees to the background automatically
function createBees() {
    for (let i = 0; i < 8; i++) {
        let bee = document.createElement('div');
        bee.className = 'bee';
        bee.innerText = '🐝';
        bee.style.top = Math.random() * 100 + 'vh';
        bee.style.animationDelay = (Math.random() * 10) + 's';
        bee.style.fontSize = (Math.random() * 20 + 20) + 'px';
        document.body.appendChild(bee);
    }
}
createBees();

// 3. Success Message
yesBtn.addEventListener('click', () => {
    document.getElementById('question').innerHTML = "Un-bee-lievable! See you on the 14th! 🐝❤️";
    document.querySelector('.buttons').style.display = 'none';
    confetti();
});
