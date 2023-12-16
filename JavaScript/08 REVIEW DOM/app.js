// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const body = document.querySelector("body")

const template = ()=>
`<ul></ul>
`
body.innerHTML += template();

const paises = document.querySelector("ul");

//console.log(paises);

for (const item of countries) {
const li = document.createElement("li");
li.innerHTML =`${item}`
paises.append(li);
}

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminar = document.querySelector(".fn-remove-me");

eliminar.remove();

//si fueran muchos elementos habria que hacer un querySelectorAll y entonces hay que hacer despues un bucle


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector('[data-function="printHere"]');
//console.log(div);

const template2 = () =>`
<ul class= c></ul>
`
div.innerHTML += template2()

const coches = document.querySelector(".c")

//console.log(coches);

for (const item of cars) {
    const li = document.createElement("li");
    li.innerHTML = `${item}`;
    coches.append(li);
};

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const body4 = document.querySelector("body");
const template4 = ()=>`
<div class=pais> </div>
`
body4.innerHTML += template4();
const paises2 = document.querySelector(".pais");
//console.log(paises2);
for (const item of countries2) {
    const h4 = document.createElement("h4");
    h4.textContent=item.title;
    const img = document.createElement("img");
    img.src = item.imgUrl
    paises2.append(h4,img);
}


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

//!este no funciona!!

const template5 = ()=>`
<button class="borraUlt"> Borrar último </button>
`
body4.innerHTML += template5();
//console.log(paises2);



const boton5 = document.querySelector(".borraUlt");
boton5.addEventListener("click", eliminarUltimo = () => {
       if (countries2.length > 0) {
         const ultimoPais = countries2[countries2.length - 1];
         console.log(ultimoPais);
         ultimoPais.remove();
}

});






// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.

//!este no lo se hacer!!


countries2.forEach((item,index)=>{
    const body5 = document.querySelector("body");
    const template6 = ()=>`
    <button class=borra> Borrar </button>
    `
     body5.innerHTML += template6();
});

