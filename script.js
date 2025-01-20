document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    
    const heroButton = document.querySelector('.hero-section button');
    heroButton.addEventListener('click', () => {
        alert('Shop Now button clicked!');
    });

    
    const carousel = document.querySelector('#dealsCarousel');
    if (carousel) {
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 3000,
            ride: 'carousel',
        });
    }
});
