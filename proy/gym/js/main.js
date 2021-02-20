/* Cargar primero la pagina */
document.addEventListener('DCOMContentLoad', function() {
    console.log("DOMContentLoaded");

});

/* Carrusel */
window.addEventListener('load', function() {
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [{
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        }]
    });
});

/* Botón de menu */
$(document).ready(main);

var contador = 0;

function main() {
    $('.boton-menu').click(menuMovil);
    $('.item-menu').click(menuMovil);

    function menuMovil() {
        // $('nav').toggle(); 

        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }

    }

};


/* window.addEventListener('load', function() {
    var contador = 1;

    function main() {
        $('.boton-menu').click(function() {
            // $('nav').toggle(); 
            console.log("Hola");
            if (contador == 1) {
                $('nav').animate({
                    left: '0'
                });
                contador = 0;
            } else {
                contador = 1;
                $('nav').animate({
                    left: '-100%'
                });
            }

        });

    };
}); */