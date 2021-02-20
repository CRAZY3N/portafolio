'use strict'

window.addEventListener('DOMContentLoaded', function(){ 

    /* Preloader */
    let preload = document.getElementById('preload');
    let body = document.querySelector('body');

    setTimeout(() => {
        preload.remove();
        body.classList.remove('hidden');
    }, 1500);

    if(screen.width < 769){
        /* Menú hamburguesa */
        const hamb = document.querySelector('#hamb');
        let nav = document.querySelector('#nav');
        setTimeout(() => {
            nav.style.display = "none";
        }, 500);
        /* Funciones */
        /* Menú hamburguesa */
        if(hamb){ /* console.log(hamb); */
            hamb.addEventListener('click', function(){
                if(nav.style.display === 'block'){
                    nav.style.display = 'none';
                } else {
                    nav.style.display = 'block';
                }
            });
        }
    }

});