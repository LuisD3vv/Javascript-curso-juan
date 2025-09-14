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
nuevoEnlace.classList.add('navegacion__enlace');
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
    //alert("SE CARGO PUTOS!!!");
}
// esperar a que el contenido html este cargado, pero no espera a que css o imagenes
document.addEventListener("DOMContentLoaded", () => {
   // alert("Ya cargo el eichtimiEL");
})
// cada que se da scroll se ejecuta la funcion
window.onscroll = () => {
    console.log("scroll");
}

// // Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', (e) => {
//     // hace referencia al evento y previene la carga
//     e.preventDefault();
//     // validar un formulario
//     console.log("enviando fomulario culo");
//
// })
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
// Eventos de los Inputs y Textarea
function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}
const formulario = document.querySelector('.formulario');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// para formularios es mas recomendable para validar con submit e input para entradas
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // utilizando destructuring para objeter los valores del objeto con el mimso nombre
    const { nombre, email, mensaje } = datos; // ya vienen de los inputs

    if (nombre === '' || email === '' || mensaje === '') {
        MostrarAlerta('*Todos los campos son obligatorios','error');
        return; // corta la ejecucion,es por eso que no es necesario un else.
    }
    // en caso de no haber error ejecuta esta funcion
    MostrarAlerta('Mensaje enviado correctamente');
});

//se hizo una refactorizacion, es decir se opttimizo el codigo para una funcion que hace dos cosas
function MostrarAlerta(mensaje,error = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add("error");
    } else {
        alerta.classList.add("correcto");
    }
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove(); // eliminar un elemento creado a anteriormente, tambien existe del como tal pero es para objetos
    }, 3000);
}