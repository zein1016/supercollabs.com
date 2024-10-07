document.addEventListener('DOMContentLoaded', () => {
    // Create subtle particles
    const particlesContainer = document.getElementById('particles-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 5 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const startPositionX = Math.random() * 100;
        const startPositionY = Math.random() * 100;
        particle.style.left = `${startPositionX}%`;
        particle.style.top = `${startPositionY}%`;

        particle.style.opacity = Math.random() * 0.5 + 0.1;

        particlesContainer.appendChild(particle);

        animateParticle(particle);
    }

    function animateParticle(particle) {
        const animation = particle.animate([
            { transform: 'translate(0, 0)' },
            { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)` }
        ], {
            duration: Math.random() * 5000 + 5000,
            direction: 'alternate',
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission
// Contact form submission
const contactForm = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    // Simulate a successful submission
    setTimeout(() => {
        contactForm.style.display = 'none';
        confirmationMessage.style.display = 'block';
        
        // Remove the code that resets and shows the form again
        // No more reset or form reappearance after submission
    }, 1000);
});
  // Cool typing effect for hero text
const heroText = document.querySelector('.hero-text');
const text = 'We build apps, <span class="pop">fast.</span>';

heroText.innerHTML = ''; // Clear the text
let i = 0;

function typeWriter() {
    if (i < text.length) {
        if (text.charAt(i) === '<') {
            // Detect the full HTML tag and append it at once
            const closeTagIndex = text.indexOf('>', i);
            heroText.innerHTML += text.substring(i, closeTagIndex + 1);
            i = closeTagIndex + 1;
        } else {
            heroText.innerHTML += text.charAt(i);
            i++;
        }
        setTimeout(typeWriter, 50); // Adjust speed of typing if necessary
    } else {
        // Make sure any remaining parts of the string are correctly rendered at the end
        heroText.innerHTML = text;
    }
}

typeWriter();

    
    // Cool hover effect for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), rgba(255,255,255,0) 80%)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = 'var(--card-bg)';
        });
    });

    // Parallax effect for section titles
    window.addEventListener('scroll', () => {
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            const speed = 0.3;
            const rect = title.getBoundingClientRect();
            const pos = rect.top / window.innerHeight;
            title.style.transform = `translateY(${pos * speed * 100}px)`;
        });
    });

    // Cool animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});