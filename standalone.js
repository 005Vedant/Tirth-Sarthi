// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
const closeIcon = mobileMenuBtn.querySelector('.close-icon');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Smooth Scrolling Function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        if (!mobileNav.classList.contains('hidden')) {
            mobileNav.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    }
}

// Add smooth scrolling to all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toastTitle');
const toastMessage = document.getElementById('toastMessage');

function showToast(title, message) {
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 5000);
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Show success message
    showToast('Message Received!', 'Thank you for your interest. We\'ll get back to you soon.');
    
    // Reset form
    contactForm.reset();
    
    // In a real application, you would send the data to a server here
    console.log('Form submitted:', formData);
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll for elements
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

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Initialize - Set navbar opacity
navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';

console.log('Tirth Sarthi - Standalone HTML/CSS/JS Version Loaded Successfully!');