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

// Mode switching functionality
window.setMode = function(mode) {
    const body = document.body;
    const buttons = document.querySelectorAll('.mode-btn');

    // Remove all mode classes
    body.classList.remove('sim-city-mode', 'ultra-chaos');

    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Find and activate the clicked button
    const activeButton = document.querySelector(`[data-mode="${mode}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    switch(mode) {
        case 'normal':
            body.classList.add('sim-city-mode');
            console.log('Normal mode activated - Classic Sim City 2000 aesthetic');
            console.log('Body classes:', body.className);
            break;
        case 'nutters':
            // Default cyberpunk chaos - no class needed
            console.log('Nutters mode - Cyberpunk construction chaos');
            console.log('Body classes:', body.className);
            break;
        case 'mayhem':
            body.classList.add('ultra-chaos');
            console.log('🔥🔥🔥 MAYHEM MODE ACTIVATED 🔥🔥🔥');
            console.log('Warning: Maximum chaos levels detected!');
            console.log('Everything is spinning and rainbow now!');
            console.log('Comic Sans has been deployed!');
            console.log('Body classes:', body.className);
            break;
    }
};

// Set up button event listeners
document.addEventListener('DOMContentLoaded', function() {
    const modeButtons = document.querySelectorAll('.mode-btn');

    console.log('Found ' + modeButtons.length + ' mode buttons');

    modeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const mode = this.getAttribute('data-mode');
            console.log('Button clicked: ' + mode);
            window.setMode(mode);
        });
    });

    // Set initial mode to nutters (cyberpunk chaos)
    window.setMode('nutters');
});
