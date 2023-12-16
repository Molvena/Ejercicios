import "./Header.css";

const template = `
<header> Proyecto Elena </header>
`
export const PrintHeader = () => {
   (document.querySelector("#app").innerHTML += template);
   //PrintNav();
}
   
//!Funcion que pinta y exporto

// export const PrintNav = () =>
// (document.querySelector("header").innerHTML += template());