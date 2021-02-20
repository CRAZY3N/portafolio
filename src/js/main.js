window.addEventListener('DOMContentLoaded', function(){
    
    /* Menú movil */
    const nav = document.querySelector('#nave'); /* console.log(nav); */

    const menu = document.querySelector('#movil');
    if(screen.width < 769 && menu){ /* console.log(menu); */
        nav.style.display = 'none';
        menu.onclick =  cMenu;
    }

    /* Enlaces */
    const enlaces = document.querySelectorAll('#nave a'); console.log(enlaces);
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', cMenu);
    });

});

/* Mostrar u Ocultar menú */
function cMenu(){
    const nave = document.querySelector('#nave'); /* console.log(nave); */
    if(nave.style.display === 'none'){
        nave.style.display = 'block';
    } else{
        nave.style.display = 'none';
    }
}
