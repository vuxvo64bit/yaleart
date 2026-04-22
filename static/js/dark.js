// homedark.js
function toggleDarkMode() {
    const root = document.querySelector(':root');
    const rootStyles = getComputedStyle(root);
    
    // Get current value of white
    const currentWhite = rootStyles.getPropertyValue('--white').trim();
    
    // If it's currently light mode, go dark
    if (currentWhite === '#FAFAFA' || currentWhite === 'rgb(250, 250, 250)') {
        root.style.setProperty('--white', '#0A0A0A');
        root.style.setProperty('--black', '#FAFAFA');
    } else {
        // Switch back to light mode
        root.style.setProperty('--white', '#FAFAFA');
        root.style.setProperty('--black', '#0A0A0A');
    }
}

