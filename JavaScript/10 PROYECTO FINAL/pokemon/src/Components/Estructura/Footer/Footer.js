import "./Footer.css";

const template =`
<footer>Soy el footer 👣</footer>
`
export const PrintTemplateFooter = () =>
  (document.querySelector("#app").innerHTML += template);