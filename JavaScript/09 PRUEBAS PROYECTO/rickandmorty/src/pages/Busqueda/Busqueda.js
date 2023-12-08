import "./Busqueda.css"

const template =() =>`
<div id="busquedaPage"></div>`

//Esto es un contenedor con los botones

export const PrintBusquedaPage = ()=>{
    document.querySelector("main").innerHTML = template();
}
//Traslado lo mismo que he hecho en el Home.js a este archivo
//Tengo que apuntar al main porque es donde quiero que se pinte.