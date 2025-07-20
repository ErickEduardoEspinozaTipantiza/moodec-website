// Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
});

// Smooth scrolling para navegación
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
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

// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector('header');
const headerLogo = document.querySelector('.logo-image');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class for styling
    if (scrollTop > 100) {
        header.classList.add('scrolled');
        if (headerLogo) {
            headerLogo.style.transform = 'scale(0.9)';
        }
    } else {
        header.classList.remove('scrolled');
        if (headerLogo) {
            headerLogo.style.transform = 'scale(1)';
        }
    }
    
    // Hide/show header based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > 200) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Video optimization
const video = document.querySelector('.showcase video');
if (video) {
    // Pause video when not visible for performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
    observer.observe(video);
    
    // Handle video loading
    video.addEventListener('loadstart', () => {
        console.log('Video loading started');
    });
    
    video.addEventListener('canplay', () => {
        console.log('Video can start playing');
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.showcase .text, .showcase .social');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
        submitBtn.style.background = '#4CAF50';
        
        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.benefit-card, .testimonial-card, .bot-info, .phone-mockup').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Counter animation for stats (if you want to add stats later)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Typewriter effect for hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typewriter effect for hero
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.text h1');
    const heroSubtitle = document.querySelector('.text h2');
    const heroLogo = document.querySelector('.hero-logo');
    
    // Animate hero logo entrance
    if (heroLogo) {
        heroLogo.style.opacity = '0';
        heroLogo.style.transform = 'scale(0) rotate(180deg)';
        heroLogo.style.transition = 'all 1s ease-out';
        
        setTimeout(() => {
            heroLogo.style.opacity = '1';
            heroLogo.style.transform = 'scale(1) rotate(0deg)';
        }, 1500);
    }
    
    if (heroTitle && heroSubtitle) {
        setTimeout(() => {
            typeWriter(heroTitle, 'MODYBOT', 100);
        }, 2500);
        
        setTimeout(() => {
            typeWriter(heroSubtitle, 'La emoción detrás de tu voz', 50);
        }, 4000);
    }
});

// Particles effect (optional enhancement)
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: #00d4ff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.7;
    `;
    
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    document.body.appendChild(particle);
    
    // Animate particle
    const duration = Math.random() * 3000 + 2000;
    const finalY = -100;
    const finalX = x + (Math.random() - 0.5) * 200;
    
    particle.animate([
        { transform: `translate(0, 0) scale(1)`, opacity: 0.7 },
        { transform: `translate(${finalX - x}px, ${finalY - y}px) scale(0)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => {
        particle.remove();
    };
}

// Create particles periodically
setInterval(createParticle, 300);

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        }, 0);
    });
}

// Error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.warn('Image failed to load:', this.src);
    });
});

// Smooth scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #00d4ff, #00a0c6);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
`;

scrollToTopBtn.addEventListener('click', scrollToTop);
document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Add hover effect to scroll to top button
scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px) scale(1.1)';
    this.style.boxShadow = '0 15px 30px rgba(0, 212, 255, 0.4)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 10px 20px rgba(0, 212, 255, 0.3)';
});

// Enhanced mobile menu
if (window.innerWidth <= 991) {
    // Create mobile menu styles
    const style = document.createElement('style');
    style.textContent = `
        nav.active {
            display: flex !important;
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 999;
        }
        
        nav.active ul {
            flex-direction: column;
            gap: 20px;
        }
        
        nav.active ul li a {
            font-size: 1.5em;
            padding: 15px 30px;
        }
        
        .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `;
    document.head.appendChild(style);
}

// Console welcome message
console.log('%c🤖 MOODEC - La emoción detrás de tu voz', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cGracias por visitar nuestra página web mejorada!', 'color: #00a0c6; font-size: 14px;');