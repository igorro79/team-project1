const openMobileMenuBtn = document.querySelector('.burger__btn')
const closeMobileMenuBtn = document.querySelector('.close__btn')
const menu = document.querySelector('.page-header')

openMobileMenuBtn.addEventListener("click", () => {
    menu.classList.toggle('menu-open')
    document.body.classList.toggle('menu-open')

})

closeMobileMenuBtn.addEventListener("click", () => {
    menu.classList.toggle('menu-open')
    document.body.classList.toggle('menu-open')
})
