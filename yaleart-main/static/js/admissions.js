// the wiki pages
const wikiPages = [
    { name: "Graphic Design MFA", url: "https://art.yale.edu/graphic-design" },
    { name: "Painting & Printmaking", url: "https://art.yale.edu/painting-printmaking" },
    { name: "Photography", url: "https://art.yale.edu/photography" },
    { name: "Admissions", url: "https://art.yale.edu/admissions" },
    { name: "Events", url: "events.html" }
];

// the elements 
const searchOpen = document.getElementById('search-open');
const searchClose = document.getElementById('search-close');
const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const noResults = document.getElementById('no-results');

// the mobile menu
const hamburger = document.getElementById('hamburger-open');
const sideMenu = document.getElementById('side-menu');
const hamburgerClose = document.getElementById('hamburger-close');

hamburger.onclick = () => sideMenu.classList.add('active');
hamburgerClose.onclick = () => sideMenu.classList.remove('active');

// open the serach overlay
searchOpen.onclick = () => {
    searchOverlay.style.display = 'flex';
    searchInput.value = '';
    searchResults.innerHTML = '';
    noResults.style.display = 'none';
    searchInput.focus();
};

// to close the search
searchClose.onclick = () => searchOverlay.style.display = 'none';

// filter search
searchInput.oninput = () => {
    const term = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';
    if (term.length > 0) {
        const matches = wikiPages.filter(p => p.name.toLowerCase().includes(term));
        if (matches.length > 0) {
            matches.forEach(match => {
                const li = document.createElement('li');
                li.textContent = match.name;
                li.onclick = () => window.location.href = match.url;
                searchResults.appendChild(li);
            });
            noResults.style.display = 'none';
        } else {
            noResults.style.display = 'block';
        }
    } else {
        noResults.style.display = 'none';
    }
};

// make sure the overlay is hidden when it loads
window.addEventListener('load', () => {
    searchOverlay.style.display = 'none';
    searchInput.value = '';
});



const links = document.querySelectorAll("a[href]");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        const url = this.href;

        // TO IGNORE THE External links
        if (url.startsWith("http") && !url.includes(window.location.host)) {
            return;
        }

        e.preventDefault();

        // fade out
        document.body.classList.add("fade-out");

        // wait then navigate
        setTimeout(() => {
            window.location.href = url;
        }, 400);
    });
});


window.addEventListener("load", () => {
    document.body.classList.remove("fade-out");
});
function toggleDarkMode() {
    const isDark = document.getElementById("dark-mode-toggle").checked;
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
}