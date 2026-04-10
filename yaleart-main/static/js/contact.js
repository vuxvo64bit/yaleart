// ========== the wiki pages ==========
const wikiPages = [
    { name: "Graphic Design MFA", url: "https://art.yale.edu/graphic-design" },
    { name: "Painting & Printmaking", url: "https://art.yale.edu/painting-printmaking" },
    { name: "Photography", url: "https://art.yale.edu/photography" },
    { name: "Admissions", url: "https://art.yale.edu/admissions" },
    { name: "Events", url: "events.html" }
];

// ========== the elements ==========
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
//  FORM LOADING 
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");

if (form && submitBtn) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        submitBtn.classList.add("loading");
        submitBtn.innerHTML = "Sending... <span class='loader'></span>";
        submitBtn.disabled = true;

        // simulate delay
        setTimeout(() => {
            window.location.href = "success.html";
        }, 1500);
    });
}