// Search Data
const wikiPages = [
    { name: "Graphic Design MFA", url: "https://art.yale.edu/graphic-design" },
    { name: "Painting & Printmaking", url: "https://art.yale.edu/painting-printmaking" },
    { name: "Photography", url: "https://art.yale.edu/photography" },
    { name: "Admissions", url: "https://art.yale.edu/admissions" },
    { name: "Events", url: "events.html" }
];

// UI Elements
const searchOverlay = document.getElementById("search-overlay");
const searchOpenBtn = document.getElementById("search-open");
const searchCloseBtn = document.getElementById("search-close");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const noResults = document.getElementById("no-results");

const loginBtn = document.getElementById("login-btn");
const userInp = document.getElementById("login-user");
const passInp = document.getElementById("login-pass");
const loadingContainer = document.getElementById("loading-container");
const loadingBar = document.getElementById("loading-bar");
const loginStatus = document.getElementById("login-status");

// Menu Controls
document.getElementById("hamburger-open").onclick = () => document.getElementById("side-menu").classList.add("active");
document.getElementById("hamburger-close").onclick = () => document.getElementById("side-menu").classList.remove("active");

// Search Functionality
searchOpenBtn.onclick = () => {
    searchOverlay.style.display = "flex";
    searchInput.value = "";
    searchResults.innerHTML = "";
    noResults.style.display = "none";
    searchInput.focus();
};
searchCloseBtn.onclick = () => searchOverlay.style.display = "none";

searchInput.oninput = () => {
    const term = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";
    if (term.length === 0) { noResults.style.display = "none"; return; }
    const matches = wikiPages.filter(page => page.name.toLowerCase().includes(term));
    if (matches.length > 0) {
        noResults.style.display = "none";
        matches.forEach(page => {
            const li = document.createElement("li");
            li.textContent = page.name;
            li.onclick = () => window.location.href = page.url;
            searchResults.appendChild(li);
        });
    } else { noResults.style.display = "block"; }
};

// --- FORM VALIDATION LOGIC ---

const updateUI = (field, errorId, isValid, message) => {
    const errorSpan = document.getElementById(errorId);
    if (isValid) {
        field.classList.add("input-success");
        field.classList.remove("input-error");
        // Removed "Success" text as requested
        errorSpan.textContent = ""; 
    } else {
        field.classList.add("input-error");
        field.classList.remove("input-success");
        errorSpan.textContent = message;
        errorSpan.style.color = "var(--red)";
    }
};

// Updated character requirement to 4 characters
userInp.addEventListener("input", () => {
    updateUI(userInp, "user-error", userInp.value.length >= 4, "Username must be 4+ characters");
});

passInp.addEventListener("input", () => {
    updateUI(passInp, "pass-error", passInp.value.length >= 4, "Password must be 4+ characters");
});

// LOGIN LOGIC (Credentials: test / test)
loginBtn.onclick = () => {
    if (userInp.value === "test" && passInp.value === "test") {
        loadingBar.style.width = "0%";
        loginStatus.textContent = "";
        loadingContainer.style.display = "block";
        loginBtn.disabled = true;

        setTimeout(() => { loadingBar.style.width = "100%"; }, 50);
        setTimeout(() => {
            loadingContainer.style.display = "none";
            loginStatus.style.color = "var(--black)";
            loginStatus.textContent = "Welcome, Student ✔";
            loginBtn.disabled = false;
        }, 2000);
    } else {
        loginStatus.style.color = "var(--red)";
        loginStatus.textContent = "Invalid Credentials. Try 'test'.";
    }
};

// Transitions
document.querySelectorAll("a[href]").forEach(link => {
    link.addEventListener("click", function (e) {
        const url = this.href;
        if (url.startsWith("http") && !url.includes(window.location.host)) return;
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => { window.location.href = url; }, 400);
    });
});


// homedark.js
function toggleDarkMode() {
    const root = document.querySelector(':root');
    const rootStyles = getComputedStyle(root);
    
    // Get current values
    const currentWhite = rootStyles.getPropertyValue('--white').trim();
    
    // Check if we are currently in light mode (#FAFAFA)
    if (currentWhite === '#FAFAFA' || currentWhite === 'rgb(250, 250, 250)') {
        // GO DARK
        root.style.setProperty('--white', '#0A0A0A');
        root.style.setProperty('--black', '#FAFAFA');
    } else {
        // GO LIGHT
        root.style.setProperty('--white', '#FAFAFA');
        root.style.setProperty('--black', '#0A0A0A');
    }
}