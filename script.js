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
let audioContext = null;
let oscillator = null;

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        if (!curseDetected) {
            curseDetected = true;
            console.log('%cTHE CURSE HAS BEEN AWAKENED...', 'color: #8b0000; font-size: 18px; font-weight: bold; text-shadow: 0 0 10px red;');
            
            // Play creepy sound
            playCreepySound();
            
            // Start flickering after 15 seconds
            setTimeout(() => {
                startUltraRapidFlickering();
            }, 15000);
        }
    }
});

function playCreepySound() {
    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        
        oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(30, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 2);
        oscillator.frequency.exponentialRampToValueAtTime(25, audioContext.currentTime + 4);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.05, audioContext.currentTime + 4);
        
        oscillator.type = 'sine';
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 4);
    } catch (e) {
        console.log('Audio not available');
    }
}

function startUltraRapidFlickering() {
    console.log('%cTHE FLICKERING BEGINS...', 'color: #8b0000; font-size: 16px; font-weight: bold;');
    
    document.body.classList.add('ultra-fading-flicker');
    
    setTimeout(() => {
        document.body.classList.remove('ultra-fading-flicker');
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                document.body.classList.add('ultra-fading-flicker');
                setTimeout(() => {
                    document.body.classList.remove('ultra-fading-flicker');
                }, 500);
            }, i * 800);
        }
        
        setTimeout(() => {
            activateCursedMode();
        }, 3500);
    }, 500);
}

function activateCursedMode() {
    document.body.classList.add('cursed-mode');
    
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.textContent = 'Fun Stuff :D';
    }
    
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        heroTitle.textContent = 'Hello again!';
    }
    
    const sectionTitles = document.querySelectorAll('.about h2, .interests h2, .projects h2');
    sectionTitles.forEach((title, index) => {
        const messages = [
            'About Me',
            'My Interests',
            'My Projects'
        ];
        title.textContent = messages[index] || title.textContent;
    });
    
    console.log('%cYOU HAVE ENTERED THE CURSED REALM', 'color: #8b0000; font-size: 18px; font-weight: bold;');
    console.log('%cThey are watching...', 'color: #8b0000; font-size: 14px;');
    console.log('%cTurn back while you still can...', 'color: #8b0000; font-size: 14px;');
    
    setInterval(() => {
        playCreepySound();
    }, 4000);
    
    startContinuousUltraRapidFlicker();
    
    setInterval(() => {
        const intensity = Math.random() * 2;
        document.body.style.transform = `translate(${intensity}px, ${intensity}px)`;
        setTimeout(() => {
            document.body.style.transform = 'translate(0, 0)';
        }, 100);
    }, 3000);
}

function startContinuousUltraRapidFlicker() {
    setInterval(() => {
        if (Math.random() > 0.7) {
            document.body.classList.add('ultra-fading-flicker');
            setTimeout(() => {
                document.body.classList.remove('ultra-fading-flicker');
            }, 500);
        }
    }, 2000);
}
