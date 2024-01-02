import "./Footer.css";

const template = () => `
<h3>PROYECTO FINAL JAVASCRIPT</h3>
<h3>Elena Gómez Cuevas</h3>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};


