import "./Main.css";


const template = () =>`
<main></main>
`

export const PrintTemplateMain = () =>
(document.getElementById("app").innerHTML += template());
