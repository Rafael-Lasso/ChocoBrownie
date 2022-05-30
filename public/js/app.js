const NavBar = document.querySelector('.navlist')
const button = document.querySelector('.mobile-menu')

button.addEventListener('click', () =>{
    NavBar.classList.toggle('active')
})