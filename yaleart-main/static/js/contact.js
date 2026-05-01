// ========== the wiki pages ==========
const wikiPages = [
    { name: "Graphic Design MFA", url: "https://art.yale.edu/graphic-design" },
    { name: "Painting & Printmaking", url: "https://art.yale.edu/painting-printmaking" },
    { name: "Photography", url: "https://art.yale.edu/photography" },
    { name: "Admissions", url: "https://art.yale.edu/admissions" },
    { name: "Events", url: "events.html" }
];

// UI Elements
const searchOpen = document.getElementById('search-open');
const searchClose = document.getElementById('search-close');
const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const noResults = document.getElementById('no-results');

const hamburger = document.getElementById('hamburger-open');
const sideMenu = document.getElementById('side-menu');
const hamburgerClose = document.getElementById('hamburger-close');

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const loadingContainer = document.getElementById('loading-container');
const loadingBar = document.getElementById('loading-bar');
const formStatus = document.getElementById('form-status');

const fnameInp = document.getElementById('fname');
const lnameInp = document.getElementById('lname');
const emailInp = document.getElementById('email');
const messageInp = document.getElementById('message');

// Menu Controls
hamburger.onclick = () => sideMenu.classList.add('active');
hamburgerClose.onclick = () => sideMenu.classList.remove('active');

// Search functionality
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

// Form Validation
const updateUI = (field, errorId, isValid, message) => {
    const errorSpan = document.getElementById(errorId);
    if (isValid) {
        field.classList.add("input-success");
        field.classList.remove("input-error");
        errorSpan.textContent = ""; 
    } else {
        field.classList.add("input-error");
        field.classList.remove("input-success");
        errorSpan.textContent = message;
    }
};

fnameInp.addEventListener("input", () => updateUI(fnameInp, "fname-error", fnameInp.value.length >= 2, "Enter first name"));
lnameInp.addEventListener("input", () => updateUI(lnameInp, "lname-error", lnameInp.value.length >= 2, "Enter last name"));
emailInp.addEventListener("input", () => updateUI(emailInp, "email-error", emailInp.value.includes('@'), "Enter valid email"));
messageInp.addEventListener("input", () => updateUI(messageInp, "message-error", messageInp.value.length >= 30, "Minimum 30 characters required"));

// "Sending" Logic (mirroring login bar from home page)
submitBtn.onclick = () => {
    if (fnameInp.value.length >= 2 && emailInp.value.includes('@') && messageInp.value.length >= 30) {
        loadingBar.style.width = "0%";
        formStatus.textContent = "";
        loadingContainer.style.display = "block";
        submitBtn.disabled = true;

        setTimeout(() => { loadingBar.style.width = "100%"; }, 50);
        
        setTimeout(() => {
            loadingContainer.style.display = "none";
            formStatus.style.color = "var(--black)";
            formStatus.textContent = "Message Sent Successfully! ✔";
            contactForm.reset();
            [fnameInp, lnameInp, emailInp, messageInp].forEach(el => el.classList.remove("input-success"));
            submitBtn.disabled = false;
        }, 2000);
    } else {
        formStatus.style.color = "var(--red)";
        formStatus.textContent = "Please check required fields.";
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