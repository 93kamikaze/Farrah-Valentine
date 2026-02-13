// Replace your existing createBees function with this:
function createBees() {
    // Increased count to 12 for better variety
    for (let i = 0; i < 12; i++) {
        let bee = document.createElement('div');
        bee.className = 'bee';
        bee.innerText = '🐝';
        
        // Randomize Vertical Position
        bee.style.top = Math.random() * 100 + 'vh';
        
        // Randomize Timing
        bee.style.animationDelay = (Math.random() * 15) + 's';
        bee.style.animationDuration = (8 + Math.random() * 10) + 's';
        
        // --- ADD VARIOUS SIZES HERE ---
        // This generates a random size between 15px and 50px
        const randomSize = Math.floor(Math.random() * 35) + 15;
        bee.style.fontSize = `${randomSize}px`;
        
        // Slight opacity variation for depth
        bee.style.opacity = Math.random() * 0.5 + 0.5; 

        document.body.appendChild(bee);
    }
}
createBees();
