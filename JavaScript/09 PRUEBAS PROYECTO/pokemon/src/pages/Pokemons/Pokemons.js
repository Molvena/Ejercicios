import "./Pokemons.css";


const template = ()=>`
<div id="containerPokePage">
<h2>Poke </h2>
</div>
`

export const printPokePage = () =>(
    document.querySelector("main").innerHTML = template());

