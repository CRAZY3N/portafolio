'use strict'

window.addEventListener('load', function(){
    
    if(screen.width < 769){
        var nav = document.querySelector('#nav'),
            mm = document.querySelector('#mm'),
            i = 0;
            nav.classList.add('none');            

            mm.addEventListener('click', function(){
                if(i === 0){
                    nav.classList.remove('none');
                    i = 1;
                } else {
                    nav.classList.add('none');
                    i = 0;
                }
            });
    }
});