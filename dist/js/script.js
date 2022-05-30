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

    const menuItems = document.querySelectorAll('.hamburger-menu__link');
    console.log(menuItems);

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuSide.classList.remove('active');
        })
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

    //scroll-top
    const scrollBtn = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > '1000') {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    })
    

    scrollBtn.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })
})