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
console.log('%cIf you\'re reading this, you\'re cool! 😎', 'color: #b78dd9; font-size: 14px;');
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
