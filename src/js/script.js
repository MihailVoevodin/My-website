window.addEventListener('DOMContentLoaded', () => {


    //hamburger

    const menuClose = document.querySelector('.hamburger-menu__close'),
          menuSide = document.querySelector('.hamburger-menu'),
          menuOpen = document.querySelector('.hamburger');

    menuOpen.addEventListener('click', () => {
        menuSide.classList.add('active');
    }) 

    menuClose.addEventListener('click', () => {
        menuSide.classList.remove('active');
    })

    document.addEventListener('click', e => {
        if (!e.target.closest('.hamburger-menu') && !e.target.closest('.hamburger')) {
            menuSide.classList.remove('active');
        }
    })

    //scroll-menu
    const menu = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > '100') {
            menu.style.backgroundColor = "#191970";
        } else {
            menu.style.backgroundColor = "transparent";
        }
    })
})