document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Toggle Mobile Navigation
    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', nav.classList.contains('nav-open'));
        });
    }

    // Toggle Dark/Light Theme
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.setAttribute('aria-label', 'Toggle Light Mode');
            themeToggle.textContent = '☀️'; // Sun icon
        } else {
            themeToggle.setAttribute('aria-label', 'Toggle Dark Mode');
            themeToggle.textContent = '🌙'; // Moon icon
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.setAttribute('aria-label', 'Toggle Light Mode');
                themeToggle.textContent = '☀️'; // Sun icon
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.setAttribute('aria-label', 'Toggle Dark Mode');
                themeToggle.textContent = '🌙'; // Moon icon
            }
        });
    }

    // Simple Form Submission Handling (for contacts.html)
    const userForm = document.getElementById('userForm');
    const resultDiv = document.getElementById('result');

    if (userForm) {
        userForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // You would typically handle form data submission using AJAX here
            // For this example, we'll just display a success message
            if (resultDiv) {
                resultDiv.textContent = 'Message sent successfully!';
                resultDiv.style.color = 'green';
                userForm.reset(); // Clear the form
            } else {
                console.log('Result div not found.');
            }
        });
    }
});