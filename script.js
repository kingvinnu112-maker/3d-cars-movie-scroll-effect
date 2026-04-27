// JavaScript for scroll animations

// Intersection Observer for lazy loading
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

// Target elements to observe
const elements = document.querySelectorAll('.fade-in');
elements.forEach((element) => {
    observer.observe(element);
});

// Parallax effect
const parallax = (e) => {
    const target = document.querySelector('.parallax');
    const speed = 0.5;
    const x = (window.innerWidth - e.pageX * speed); // Adjust speed here for parallax effect
    const y = (window.innerHeight - e.pageY * speed);
    target.style.transform = `translate(${x}px, ${y}px)`;
};

document.addEventListener('mousemove', parallax);

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach((input) => {
        if (!input.value) {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (!valid) {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
});

// Gallery interactions
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('enlarged'); // Example interaction
    });
});

// Performance optimizations
const optimizePerformance = () => {
    if ('requestAnimationFrame' in window) {
        window.requestAnimationFrame(() => {
            // Enclose your scroll-related code here for optimal performance.
        });
    }
};

document.addEventListener('scroll', optimizePerformance);
