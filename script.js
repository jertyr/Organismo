// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Ultra Chaos Mode Toggle
function toggleChaos() {
    const body = document.body;
    const button = document.getElementById('chaosButton');
    const buttonText = document.getElementById('chaosText');

    if (body.classList.contains('ultra-chaos')) {
        body.classList.remove('ultra-chaos');
        buttonText.textContent = '⚡ ACTIVATE ULTRA CHAOS MODE ⚡';
    } else {
        body.classList.add('ultra-chaos');
        buttonText.textContent = '🛑 DEACTIVATE ULTRA CHAOS MODE 🛑';

        // Play a sound effect if you dare
        console.log('🔥🔥🔥 ULTRA CHAOS MODE ACTIVATED 🔥🔥🔥');
        console.log('Warning: Maximum chaos levels detected!');
        console.log('Everything is spinning and rainbow now!');
    }
}
