'use strict'

window.addEventListener('load', function(){
    
    /* Menú movil */
    if(screen.width < 769){
        let nav = document.querySelector('#nav'),
            mm = document.querySelector('#mm'),
            i = 0;
            nav.style.display = 'none';

            mm.addEventListener('click', function(){
                if(i === 0){
                    nav.style.display = 'block';
                    i = 1;
                } else {
                    nav.style.display = 'none';
                    i = 0;
                }
            });

        }


        /* Slider */
        let gmenu = document.getElementById('glider-single01');
        if(gmenu){
            if(screen.width < 769){
                new Glider(gmenu, {
                    slidesToShow: 1,
                    dots: '#dots01',
                    draggable: true,
                    scrollLock: true,
                    rewind: true,
                    arrows: {
                      prev: '#glider-prev01',
                      next: '#glider-next01'
                    },
                    easing: function (x, t, b, c, d) {
                      return c*(t/=d)*t + b;
                    }
                  });
            } else {
                new Glider(gmenu, {
                    slidesToShow: 3,
                    dots: '#dots01',
                    draggable: true,
                    scrollLock: true,
                    rewind: true,
                    arrows: {
                      prev: '#glider-prev01',
                      next: '#glider-next01'
                    },
                    easing: function (x, t, b, c, d) {
                      return c*(t/=d)*t + b;
                    }
                  });
            }
        }



});