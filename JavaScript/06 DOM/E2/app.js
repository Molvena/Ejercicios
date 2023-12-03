

//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const template = `
<div></div>`;

const body = document.querySelector("body");

body.innerHTML += template;

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const template2 = `
<div><p></p></div>`;

const body2 = document.querySelector("body");

body2.innerHTML += template2;

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const template3 = () => `
<div><ul class="lista"></ul></div>
`
const body3 = document.querySelector("body");

body3.innerHTML += template3();

const ul = document.querySelector(".lista")

for(let i= 0; i<6; i++) {
const li = document.createElement("li");
ul.appendChild(li);
}


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const body4 = document.querySelector("body");

const template4 = () =>
`<div>
  <p>Soy dinámico</p>
</div>`;

body4.innerHTML += template4();

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here");

h2.innerText = "Wubba Lubba dub dub";


//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const body6 = document.querySelector("body");

const template6 = `
<ul class=plt> </ul>`;

body6.innerHTML += template6;

const plt = document.querySelector(".plt");

for (const item of apps) {
  const li = document.createElement("li");
  //console.log(li);
  li.innerHTML = `${item}`;
  //console.log(item);
  plt.appendChild(li);
}


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eliminar = document.querySelectorAll(".fn-remove-me");
//console.log(eliminar);
//eliminar es un nodeList, que lo recorro con un forEach

eliminar.forEach((item,index)=>{
item.remove();
})


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.

const nodeList = document.querySelectorAll("div");

const div2 = nodeList[1];

//console.log(div2);

const p = document.createElement("p");

p.textContent = "Voy en medio!"

const body8 = document.querySelector("body");

body8.insertBefore(p,div2);


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const div9 = document.querySelectorAll(".fn-insert-here");
//console.log(div9);

div9.forEach((item,index)=>{
  item.textContent = "Voy dentro!";
})

