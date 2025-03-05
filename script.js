
const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    // Update icons
    [themeToggleDesktop, themeToggleMobile].forEach(toggle => {
        if (toggle) {
            toggle.querySelector('i').classList.toggle('fa-sun', !isDark);
            toggle.querySelector('i').classList.toggle('fa-moon', isDark);
        }
    });
}
themeToggleDesktop?.addEventListener('click', toggleTheme);
themeToggleMobile?.addEventListener('click', toggleTheme);

document.addEventListener("DOMContentLoaded", function() {
    new Typed('#type-it', {
        strings: ['Developer', 'Designer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});



AOS.init();

function openPopup() {
document.getElementById('popup').style.display = 'flex';
document.body.style.position = 'fixed';
}

function closePopup() {
document.getElementById('popup').style.display = 'none';
document.body.style.position = '';
}

document.getElementById('openPopup').addEventListener('click', openPopup);


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".progress-bar").forEach(function (bar) {
        let width = bar.getAttribute("aria-valuenow");
        bar.style.width = width + "%";
        bar.textContent = width + "%";  // Set the text inside the progress bar
    });
});

