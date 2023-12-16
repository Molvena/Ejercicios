import "./Home.css";

const template = ()=>`
<div id="containerHomePage">
<h2>Soy el Home </div>
</div>
`

export const printHomePage = () =>(
    document.querySelector("main").innerHTML += template());