import "./Home.css";



const template = ()=>`
<div id="containerHomePage">
<h2>🏠</h2>
</div>
`



export const printHomePage = () =>(
    document.querySelector("main").innerHTML = template());

