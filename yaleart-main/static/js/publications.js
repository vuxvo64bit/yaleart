const wikiPages = [
    { name: "Graphic Design MFA", url: "https://art.yale.edu/graphic-design" },
    { name: "Painting & Printmaking", url: "https://art.yale.edu/painting-printmaking" },
    { name: "Photography", url: "https://art.yale.edu/photography" },
    { name: "Admissions", url: "https://art.yale.edu/admissions" },
    { name: "Events", url: "events.html" },
    { name: "Publications", url: "publications.html" }
];

const searchOpen = document.getElementById('search-open');
const searchClose = document.getElementById('search-close');
const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const noResults = document.getElementById('no-results');

const hamburger = document.getElementById('hamburger-open');
const sideMenu = document.getElementById('side-menu');
const hamburgerClose = document.getElementById('hamburger-close');

hamburger.onclick = () => sideMenu.classList.add('active');
hamburgerClose.onclick = () => sideMenu.classList.remove('active');

searchOpen.onclick = () => {
    searchOverlay.style.display = 'flex';
    searchInput.value = '';
    searchResults.innerHTML = '';
    noResults.style.display = 'none';
    searchInput.focus();
};

searchClose.onclick = () => searchOverlay.style.display = 'none';

searchInput.oninput = () => {
    const term = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    if (term.length > 0) {
        const matches = wikiPages.filter(p =>
            p.name.toLowerCase().includes(term)
        );

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

function updatePublicationImage() {
    const img = document.querySelector(".publication-image");
    if (!img) return;

    if (document.body.classList.contains("dark-mode")) {
        img.src = img.dataset.dark;
    } else {
        img.src = img.dataset.light;
    }
}

window.addEventListener('load', () => {
    searchOverlay.style.display = 'none';
    searchInput.value = '';
    document.body.classList.remove("fade-out");
    updatePublicationImage();
});

document.getElementById("dark-mode-toggle").addEventListener("change", () => {
    setTimeout(updatePublicationImage, 50);
});

const links = document.querySelectorAll("a[href]");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        const url = this.getAttribute("href");

        if (!url || url === "#") return;

        if (url.startsWith("http") && !url.includes(window.location.host)) {
            return;
        }

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = url;
        }, 400);
    });
});

document.querySelectorAll(".publication-card").forEach(card => {
    card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        window.location.href = "publication-detail.html";
    });
});