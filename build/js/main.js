
document.addEventListener('DOMContentLoaded', ()=>{
    const initApp = ()=> {
        const hambugerbtn = document.querySelector('#hamburger-button')
        const mobileMenu = document.querySelector('#mobile-menu')
    
        const toggleMenu = () =>{
            mobileMenu.classList.toggle('hidden')
            mobileMenu.classList.toggle('flex')
            hambugerbtn.classList.toggle('toggle-btn')
        }
        hambugerbtn.addEventListener('click', toggleMenu)
        mobileMenu.addEventListener('click', toggleMenu)
    }
    initApp()
})