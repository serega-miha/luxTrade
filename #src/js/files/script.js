

let userIcon = document.querySelector('.menu__action-user'),
    userMenu = document.querySelector('.menu__action-user-menu');


    userIcon.addEventListener('click', (e)  =>{
        userMenu.classList.toggle('_active');
    
})

document.documentElement.addEventListener('click', (e)=>{
    if (!e.target.closest('.menu__action-user')) {
        let userMenu = document.querySelector('.menu__action-user-menu');
        userMenu.classList.remove('_active')

    }
})



