const template = ()=>`
<div id="containerHomePage">
<h2>Soy el Home 🏠</div>
</div>
`

export const printHomePage = () =>(
    document.querySelector("main").innerHTML += template());

    // Aqui apunto a main porque es donde voy a pintar la página (en la parte central)
    // Lo que estoy haciendo es un contenedor independiente (<div>)dentro del main 
    // para cambiar de sector y poder maquetarlo de forma independiente.
    // Entonces en la Nav cuando le de al boton tengo que llamar a printHomePage 
    // Al id del template id="containerHomePage" lo voy a llamar desde 