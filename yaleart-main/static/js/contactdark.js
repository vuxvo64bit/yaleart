// contactdark.js
function toggleDarkMode() {
    const body = document.body;
    const contactTitle = document.querySelector('.contact-left .page-title');
    const directoryTexts = document.querySelectorAll('.directory p');
    const footerText = document.getElementById('footer-text');
    const footer = document.querySelector('.footer');

    // Toggle a tracking class on the body
    body.classList.toggle('dark-mode-active');

    if (body.classList.contains('dark-mode-active')) {
        // 1. Change the main page background to black
        body.style.backgroundColor = '#0A0A0A';

        // 2. Change the left-side text to white
        if (contactTitle) {
            contactTitle.style.color = '#FAFAFA';
            contactTitle.style.borderBottomColor = '#FAFAFA';
        }
        directoryTexts.forEach(p => {
            p.style.color = '#FAFAFA';
        });

        // 3. Fix the footer so it's visible
        if (footerText) footerText.style.color = '#FAFAFA';
        if (footer) footer.style.borderTopColor = '#FAFAFA';

    } else {
        // Restore Light Mode Defaults
        body.style.backgroundColor = '#FAFAFA';

        if (contactTitle) {
            contactTitle.style.color = '#0A0A0A';
            contactTitle.style.borderBottomColor = '#0A0A0A';
        }
        directoryTexts.forEach(p => {
            p.style.color = '#0A0A0A';
        });

        if (footerText) footerText.style.color = '#0A0A0A';
        if (footer) footer.style.borderTopColor = '#0A0A0A';
    }
}