export function getNavbarHeight() {
    const navbar = document.querySelector('#navbar');
    return navbar ? navbar.clientHeight : 0;
}