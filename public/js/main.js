/**
 * Tattoo & Lashes Nails - Client-Side Interactions
 * Deep Nocturnal Elegance Theme
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initGlassEffects();
    initAnalytics();
});

/**
 * Adjust header opacity and border glow on scroll
 */
function initHeaderScroll() {
    const header = document.getElementById('mainHeader');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.background = 'rgba(14, 14, 17, 0.95)';
            header.style.borderBottomColor = 'rgba(255, 172, 232, 0.3)';
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 172, 232, 0.1)';
            header.style.padding = '0.75rem 1.25rem';
        } else {
            header.style.background = 'rgba(19, 19, 22, 0.75)';
            header.style.borderBottomColor = 'rgba(255, 172, 232, 0.15)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(255, 172, 232, 0.05)';
            header.style.padding = '1rem 1.25rem';
        }
    });
}

/**
 * Add active state/click feedback styles for touch devices (micro-interactions)
 */
function initGlassEffects() {
    const buttons = document.querySelectorAll('.glass-btn');
    
    buttons.forEach(button => {
        // Touch starts - active state simulation for premium feedback on mobile
        button.addEventListener('touchstart', () => {
            button.style.transform = 'scale(0.97) translateY(0)';
            button.style.backgroundColor = 'rgba(255, 172, 232, 0.15)';
            button.style.boxShadow = '0 4px 12px rgba(255, 172, 232, 0.3)';
        });

        // Touch ends
        button.addEventListener('touchend', () => {
            button.style.transform = '';
            button.style.backgroundColor = '';
            button.style.boxShadow = '';
        });

        // Dynamic mouse move reflection effect for desktop
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Set variables to update radial gradient focus point if needed, 
            // or perform soft tilt if desired.
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Profile Logo spin on hover
    const avatar = document.getElementById('avatarContainer');
    if (avatar) {
        avatar.addEventListener('mouseenter', () => {
            const glowColor = 'rgba(255, 172, 232, 0.6)';
            avatar.style.boxShadow = `0 0 40px ${glowColor}`;
        });
        avatar.addEventListener('mouseleave', () => {
            avatar.style.boxShadow = '';
        });
    }
}

/**
 * Log tracking analytics placeholder for button clicks
 */
function initAnalytics() {
    const buttons = document.querySelectorAll('.glass-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const btnName = button.querySelector('.btn-text')?.textContent || 'Desconocido';
            console.log(`[Analytics] Click en enlace: ${btnName}`);
        });
    });

    const contactLink = document.querySelector('.contact-link');
    if (contactLink) {
        contactLink.addEventListener('click', () => {
            console.log('[Analytics] Click en botón de llamada telefónica');
        });
    }
}
