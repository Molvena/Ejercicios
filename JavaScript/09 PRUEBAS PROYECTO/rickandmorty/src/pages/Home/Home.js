//!Primera parte del ejercicio

// const template = ()=>`
// <div id="containerHomePage">
// <h2>Soy el Home </div>
// </div>
// `

// export const printHomePage = () =>(
//     document.querySelector("main").innerHTML += template());



    // Aqui apunto a main porque es donde voy a pintar la página (en la parte central)
    // Lo que estoy haciendo es un contenedor independiente (<div>)dentro del main 
    // para cambiar de sector y poder maquetarlo de forma independiente.
    // Entonces en la Nav cuando le de al boton tengo que llamar a printHomePage 
    // Al id del template id="containerHomePage" lo voy a llamar desde el Figure
    //para meterle las cartas

    
 //!Segunda parte del ejercicio   
import "./Home.css"
import { PrintFigureRicky } from "../../Components/Figure/Figure";
import { mappeoData } from "../../utils/mappeoDataRicky";

    const template = ()=>`
<div id="containerHomePage"></div>
`;

const getData = async () =>{
const dato = await mappeoData();
//console.log(getData);
printGallery(dato);
} 


const printGallery = (data) => {
    console.log(data);
data.map((item) => PrintFigureRicky(item.name,item.image));
}



export const printHomePage = () =>{
    document.querySelector("main").innerHTML += template();
    getData();
};

    //Defino getData, que recibe mappeoData para traerse los datos
    //que previamente he filtardo dejando el name y la image
    //Tendrá que ser asíncrona por ser hija de asíncrona    
    //Recibe tambien a printGallery que la defino luego

    //Defino printGallery que sera una función 
    //a la que pasamos toda la data que viene del mappeoData
    //ya filtrada con el name y la image. 
    //Le hago un mapeo, la reecorro porque es un array
    //A cada elemento singular de data, 
    //le meto por medio del prinFigureRicky con el nombre y la imagen
    //Esta funcion tambien se puede hacer en utils, pero como es pintar se permite hacerla aqui
    //porque no estoy gestionando datos

    
    //A printHome le tengo que meter llaves porque vamos a meterle tb el getData()
    //Primero pintamos la pagina y luego nos llevamos los datos