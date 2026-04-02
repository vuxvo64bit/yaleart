const sideMenu = document.getElementById('side-menu');
const openBtn = document.getElementById('hamburger-open');
const closeBtn = document.getElementById('hamburger-close');
// THIS SCRIPT IS FOR THE HAMBURBER SIDE PANEL FOR MOBILE
// this is opening the side panel
openBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

// this is for closing the side panel
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});

// closing the menu whenever the link is clicked
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });
});
