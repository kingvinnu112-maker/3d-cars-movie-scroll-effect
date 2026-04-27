// script.js

// Scroll Animations
const scrollElements = document.querySelectorAll('.scroll-animation');
const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
});

scrollElements.forEach(element => {
    elementObserver.observe(element);
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if(!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        form.submit(); // proceed with form submission
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Parallax Effects
const parallaxElements = document.querySelectorAll('.parallax');
window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        const yOffset = window.pageYOffset * speed;
        element.style.transform = `translateY(${yOffset}px)`;
    });
});

// Interactive Features
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(element => {
    element.addEventListener('click', () => {
        // Add your interactive logic here
        element.classList.toggle('active');
    });
});
