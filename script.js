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

// Chaos Level Slider
function setChaosLevel(level) {
    const body = document.body;
    const indicator = document.getElementById('levelIndicator');

    // Remove all mode classes
    body.classList.remove('professional-mode', 'ultra-chaos');

    switch(level) {
        case 1:
            body.classList.add('professional-mode');
            indicator.textContent = '📊 LEVEL 1: PROFESSIONAL MODE';
            indicator.style.color = '#4a5568';
            indicator.style.borderColor = '#cbd5e0';
            console.log('Professional mode activated - Clean and buttoned up');
            break;
        case 2:
            // Default cyberpunk chaos - no class needed
            indicator.textContent = '⚡ LEVEL 2: CYBERPUNK CHAOS ⚡';
            indicator.style.color = '#FF00FF';
            indicator.style.borderColor = '#FF00FF';
            console.log('Cyberpunk Chaos mode - Default unhinged aesthetic');
            break;
        case 3:
            body.classList.add('ultra-chaos');
            indicator.textContent = '🔥 LEVEL 3: ULTRA CHAOS MODE 🔥';
            indicator.style.color = '#FF0000';
            indicator.style.borderColor = '#FF0000';
            console.log('🔥🔥🔥 ULTRA CHAOS MODE ACTIVATED 🔥🔥🔥');
            console.log('Warning: Maximum chaos levels detected!');
            console.log('Everything is spinning and rainbow now!');
            console.log('Comic Sans has been deployed!');
            break;
    }
}

// Set up slider event listener
document.addEventListener('DOMContentLoaded', function() {
    const chaosSlider = document.getElementById('chaosSlider');
    if (chaosSlider) {
        // Set initial level to 2 (cyberpunk chaos)
        setChaosLevel(2);

        chaosSlider.addEventListener('input', function() {
            const level = parseInt(this.value);
            setChaosLevel(level);
        });
    }
});
