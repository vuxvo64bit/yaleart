function toggleDarkMode() {
    const isDark = document.getElementById("dark-mode-toggle").checked;
    applyDarkMode(isDark);
    localStorage.setItem("darkMode", isDark ? "true" : "false");
}

function applyDarkMode(isDark) {
    const root = document.querySelector(':root');

    if (isDark) {
        document.body.classList.add("dark-mode");
        root.style.setProperty('--white', '#0A0A0A');
        root.style.setProperty('--black', '#FAFAFA');
    } else {
        document.body.classList.remove("dark-mode");
        root.style.setProperty('--white', '#FAFAFA');
        root.style.setProperty('--black', '#0A0A0A');
    }

    // Swap publication image if it exists
    const img = document.querySelector('.publication-image');
    if (img) {
        img.src = isDark ? img.dataset.dark : img.dataset.light;
    }
}

// Run on every page load
(function () {
    const saved = localStorage.getItem("darkMode") === "true";
    const toggle = document.getElementById("dark-mode-toggle");
    if (toggle) toggle.checked = saved;
    applyDarkMode(saved);
})();