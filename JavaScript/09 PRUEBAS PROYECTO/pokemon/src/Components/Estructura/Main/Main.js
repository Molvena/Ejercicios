import "./Main.css";

const template = () =>`
<main>Main</main>
`

export const PrintMain = () =>
(document.getElementById("app").innerHTML += template());
