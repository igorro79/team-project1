const openMobileMenuBtn = document.querySelector('.burger__btn')
const closeMobileMenuBtn = document.querySelector('.close__btn')
const heroBackdrop = document.querySelector('.header__backdrop')
const menu = document.querySelector('.page-header')
const navLinks = document.querySelectorAll('.nav__link')

openMobileMenuBtn.addEventListener("click", toggleMenu)
closeMobileMenuBtn.addEventListener("click", toggleMenu)
heroBackdrop.addEventListener('click', toggleMenu)

navLinks.forEach((link) => {
    link.addEventListener('click', toggleMenu)
})

function toggleMenu() {
    menu.classList.toggle('menu-open')
    document.body.classList.toggle('menu-open')
}


