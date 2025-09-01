// querySelector
const heading = document.querySelector(".header__texto h2") // retorna 0 o 1 elementos
heading.textContent = 'nuevo heading';
heading.classList.add('nueva-clase');
heading.classList.remove('nueva-clase');

// querySelectorAll retorna de 0 a los existentes
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = "Nuevo texto para enlace";
enlaces[0].href = "https://google.com"
//enlaces[0].classList.remove('navegacion__enlace');

// getElementById

const heading2 = document.getElementById("heading");
heading2.textContent = 'nuevo heading';

// Generar un nuevo enlace, se recomineda en mayusculas

const nuevoEnlace = document.createElement('A');
// Agregar enlace
nuevoEnlace.href = "nuevo-enlace.html";
// agregar clase
nuevoEnlace.classList.add('.navegacion__enlace');
// agregar texto
nuevoEnlace.textContent = 'Tienda Virtual';
// agreagarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


// el objeto windows es mas alto que el document
console.log(nuevoEnlace);

// Eventos, a la funcion se le conoce como callback
window.addEventListener("load", () => {
/*
* // load espera a que se descarguen javascript y los archivos que dependen del html
* esten listos*/
})
// es igual a la de arriba
window.onload = () => {
    alert("SE CARGO PUTOS!!!");
}
// esperar a que el contenido html este cargado, pero no espera a que css o imagenes
document.addEventListener("DOMContentLoaded", () => {
    alert("Ya cargo el eichtimiEL");
})
// cada que se da scroll se ejecuta la funcion
window.onscroll = () => {
    console.log("scroll");
}

// Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', (e) => {
    // hace referencia al evento y previene la carga
    console.log(e)
    e.preventDefault();
    // validar un formulario
    console.log("enviando fomulario");

})