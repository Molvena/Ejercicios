import "./Home.css";



const template = ()=>`
<div id="containerHomePage">
</div>
`
const getData = async () =>{
const data = await mappeoData();

}



export const printHomePage = () =>(
    document.querySelector("main").innerHTML = template());

