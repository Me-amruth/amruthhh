// Check if intro was already shown in this session
if (sessionStorage.getItem('introShown')) {
    document.getElementById('intro').style.display = 'none';
} else {
    // If not shown, allow dismissal by button
    document.getElementById('enter-btn').addEventListener('click', function () {
        const intro = document.getElementById('intro');
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.style.display = 'none';
            sessionStorage.setItem('introShown', 'true'); // Save in sessionStorage
        }, 1500);
    });

    // Auto-dismiss after 7 seconds
    setTimeout(() => {
        const intro = document.getElementById('intro');
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.style.display = 'none';
            sessionStorage.setItem('introShown', 'true'); // Save in sessionStorage
        }, 1500);
    }, 7000);
}

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));
});
