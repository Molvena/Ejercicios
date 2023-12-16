import "./Busqueda.css";

const template = () =>`
<div id="pagBusqueda">Busqueda</div>
`
//Esto es un contenedor con los botones

export const PrintBusquedaPage = () =>{
    document.querySelector("main").innerHTML = template();
}
//Tengo que apuntar al main porque es donde quiero que se pinte.

