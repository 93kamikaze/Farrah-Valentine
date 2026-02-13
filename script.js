const noBtn = document.getElementById('noButton');

// Function to move the button to a random spot
function moveButton() {
    // Calculate bounds so the button doesn't go off-screen
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// "Run Away" Logic: Detects proximity
window.addEventListener('mousemove', (e) => {
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate the center of the button
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;
    
    // Calculate distance between cursor and button center
    const distance = Math.sqrt(
        Math.pow(e.clientX - btnCenterX, 2) + 
        Math.pow(e.clientY - btnCenterY, 2)
    );

    // If the cursor is closer than 100 pixels, move the button
    if (distance < 100) {
        moveButton();
    }
});

// Keep your existing createBees() and yesBtn listener here
