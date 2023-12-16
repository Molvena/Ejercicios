import "./Topo.css";


const template = () =>`
<div id="pagTopo">
</div>
`
//Esto es un contenedor con los botones

export const PrintTopoPage = () =>{
    document. querySelector("main"). innerHTML = template();
}
//Tengo que apuntar al main porque es donde quiero que se pinte.