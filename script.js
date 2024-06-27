document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = 0;
    heroContent.style.transition = 'opacity 2s';

    setTimeout(() => {
        heroContent.style.opacity = 1;
    }, 500);
});
