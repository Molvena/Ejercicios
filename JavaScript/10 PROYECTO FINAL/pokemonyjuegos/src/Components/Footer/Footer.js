import "./Footer.css";

const template = () => `
<h3><span>Soy el Footer</span> Proyecto Elena</h3>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};


