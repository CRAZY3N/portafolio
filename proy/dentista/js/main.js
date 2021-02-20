'use strict';

/* Cargar la pagina primero */
window.addEventListener('load', function(){

/* Botón movil */
    /* Obtenemos el header y la clase */
var menu = document.querySelector("header .nav");
menu.style.display = "block";

/* Tamaño pantalla */
var ancho = screen.width;
var alto = screen.height;


var contador = 1;
var btnMovil = document.querySelector("#btnmovil");
var item1 = document.querySelector(".item-menu1");
var item2 = document.querySelector(".item-menu2");
var item3 = document.querySelector(".item-menu3");
var item4 = document.querySelector(".item-menu4");

/* Llamamos la función del bóton movil */
btnMovil.addEventListener('click', menuMovil);
item1.addEventListener('click', menuMovil);
item2.addEventListener('click', menuMovil);
item3.addEventListener('click', menuMovil);
item4.addEventListener('click', menuMovil);

/* Menu movil */
function menuMovil(){
    if(ancho < 650 && alto < 800){
        if( contador === 0){
            menu.style.display = "block";
            contador = 1;
        } else if (contador === 1){
            menu.style.display = "none";
            contador = 0;
        }
    }
}/* Fin del menu movil */

});
/* Fin de cargar */
