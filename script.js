// script.js

const bunny = document.getElementById('bunny');
let posX = -100; // Initial X position off-screen
const speed = 1; // Adjust speed as needed

function moveBunny() {
    // Move bunny across the screen
    posX += speed;
    bunny.style.left = posX + 'px';

    // Loop the animation
    if (posX < window.innerWidth) {
        requestAnimationFrame(moveBunny);
    } else {
        posX = -100; // Reset position after reaching the end
        bunny.style.left = posX + 'px';
        requestAnimationFrame(moveBunny);
    }
}

// Start animation when the window loads
window.addEventListener('load', () => {
    moveBunny();
});
