let menu = document.getElementById('btn_menu')
let menuList = document.getElementById('menu')
menu.addEventListener('click', () => {
    menuList.classList.toggle('active');
});