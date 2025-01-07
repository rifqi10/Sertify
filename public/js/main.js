document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // Highlight the active link based on the current URL
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('font-semibold', 'text-yellow-500');
        } else {
            link.classList.remove('font-semibold', 'text-yellow-500');
        }
    });

    // Add click event listener to update the active link dynamically
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('font-semibold', 'text-yellow-500'));
            link.classList.add('font-semibold', 'text-yellow-500');
        });
    });
});
