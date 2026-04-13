// 
// the wiki pages so far
// 
const wikiPages = [
    { name: "Graphic Design MFA", url: "https://art.yale.edu/graphic-design" },
    { name: "Painting & Printmaking", url: "https://art.yale.edu/painting-printmaking" },
    { name: "Photography", url: "https://art.yale.edu/photography" },
    { name: "Admissions", url: "https://art.yale.edu/admissions" },
    { name: "Events", url: "events.html" }
];


//
// elements of the serach overlay and stuff
// 
const searchOverlay = document.getElementById("search-overlay");
const searchOpenBtn = document.getElementById("search-open");
const searchCloseBtn = document.getElementById("search-close");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const noResults = document.getElementById("no-results");

const hamburgerOpen = document.getElementById("hamburger-open");
const hamburgerClose = document.getElementById("hamburger-close");
const sideMenu = document.getElementById("side-menu");


const loginBtn = document.getElementById("login-btn");
const loadingContainer = document.getElementById("loading-container");
const loadingBar = document.getElementById("loading-bar");
const loginStatus = document.getElementById("login-status");



hamburgerOpen.onclick = () => {
    sideMenu.classList.add("active");
};

hamburgerClose.onclick = () => {
    sideMenu.classList.remove("active");
};



searchOpenBtn.onclick = () => {
    searchOverlay.style.display = "flex";

    // reset state
    searchInput.value = "";
    searchResults.innerHTML = "";
    noResults.style.display = "none";

    searchInput.focus();
};

searchCloseBtn.onclick = () => {
    searchOverlay.style.display = "none";
};



searchInput.oninput = () => {
    const term = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    // if input empty
    if (term.length === 0) {
        noResults.style.display = "none";
        return;
    }

    // filter matches
    const matches = wikiPages.filter(page =>
        page.name.toLowerCase().includes(term)
    );

    // show results
    if (matches.length > 0) {
        noResults.style.display = "none";

        matches.forEach(page => {
            const li = document.createElement("li");
            li.textContent = page.name;

            li.onclick = () => {
                window.location.href = page.url;
            };

            searchResults.appendChild(li);
        });

    } else {
        noResults.style.display = "block";
    }
};


// 
// the login loading function for home page
// 
loginBtn.onclick = () => {

    // reset everything
    loadingBar.style.width = "0%";
    loginStatus.textContent = "";
    loadingContainer.style.display = "block";

    // disable button while loading
    loginBtn.disabled = true;
    loginBtn.textContent = "Loading...";

    // start animation
    setTimeout(() => {
        loadingBar.style.width = "100%";
    }, 50);

    // simulate delay
    setTimeout(() => {
        loadingContainer.style.display = "none";
        loginStatus.textContent = "Signed In ✔";

        // reset button
        loginBtn.disabled = false;
        loginBtn.textContent = "LOGIN";

    }, 2000);
};



window.addEventListener("load", () => {
    searchOverlay.style.display = "none";
    searchInput.value = "";
});


// 
// sumran nasir this is the page transition 
// 
const links = document.querySelectorAll("a[href]");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        const url = this.href;

        // ignore external links
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