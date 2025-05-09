document.getElementById('hamburger').addEventListener('click', function() {
    const sideMenu = document.getElementById('sideMenu');
    const isExpanded = sideMenu.getAttribute('aria-expanded') === 'true';
    sideMenu.setAttribute('aria-expanded', !isExpanded);
    sideMenu.hidden = isExpanded;
});
