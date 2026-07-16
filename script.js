// SMOOTH SCROLLING for navigation links
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

// WELCOME MESSAGE in console (just for fun!)
console.log('%cWelcome to Holly\'s Website!', 'color: #d87093; font-size: 20px; font-weight: bold;');
console.log('%cWebsite about me and other fun stuff haha yeah :D', 'color: #b78dd9; font-size: 14px;');
console.log('%cCheck out my GitHub: github.com/Holly1225/iloveglitch', 'color: #7c6b8d; font-size: 12px;');

// ADD ANIMATION when sections come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// OBSERVE all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// HIGHLIGHT active nav link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.opacity = '1';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.opacity = '0.6';
            link.style.textDecoration = 'underline';
        } else {
            link.style.textDecoration = 'none';
        }
    });
});

// CURSED MODE - Trigger when user scrolls to bottom
let curseDetected = false;

window.addEventListener('scroll', () => {
    // Check if user has scrolled to the bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        if (!curseDetected) {
            curseDetected = true;
            console.log('%cTHE CURSE HAS BEEN AWAKENED...', 'color: #8b8b6b; font-size: 16px; font-weight: bold;');
            
            // Start flickering after 20 seconds
            setTimeout(() => {
                startRapidFadeFlickering();
            }, 20000);
        }
    }
});

function startRapidFadeFlickering() {
    document.body.classList.add('fading-flicker');
    
    // Flicker for 3 seconds
    setTimeout(() => {
        document.body.classList.remove('fading-flicker');
        activateCursedMode();
    }, 3000);
}

function activateCursedMode() {
    document.body.classList.add('cursed-mode');
    
    // Change the hero text to cursed version
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.textContent = 'This is a totally normal website.';
    }
    
    console.log('%cTHIS IS A TOTALLY NORMAL WEBSITE', 'color: #8b8b6b; font-size: 18px; font-weight: bold;');
    console.log('%cYou have entered the cursed realm...', 'color: #8b8b6b; font-size: 14px;');
    
    // Start continuous rapid fade flicker every 3-7 seconds
    startContinuousRapidFadeFlicker();
}

function startContinuousRapidFadeFlicker() {
    setInterval(() => {
        // Random delay between 3-7 seconds
        const delay = Math.random() * 4000 + 3000;
        
        setTimeout(() => {
            document.body.classList.add('fading-flicker');
            
            // Remove flicker class after animation completes (0.8s animation)
            setTimeout(() => {
                document.body.classList.remove('fading-flicker');
            }, 800);
        }, delay);
    }, 5000); // Run this check every 5 seconds
}
