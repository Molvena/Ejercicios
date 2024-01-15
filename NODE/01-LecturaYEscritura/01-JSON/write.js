//Requerimos la libreria fs

const fs =require("fs");

const avengers = [
    {
        name: 'SpiderMan',
        power: 70
    },
    {
        name: 'Dr.Strange',
        power: 80
    },
    {
        name: 'Hulk',
        power: 110
    }
];

//De repaso añadimos claves valor a losobjetos

const avengersTwo = avengers.map((avenger) =>{
    if (avenger.power>70){
        return{
        ...avenger,
        powerful: "high",
        };
    }else{
        return{
        ...avenger,
        powerful: "low",
    };
}
});

console.log(avengersTwo);

//Convertimos la data a texto plano

const stringifyAvengers = JSON.stringify(avengersTwo);

console.log("Avengers Texto Plano", stringifyAvengers);

//Escribimos el archivo con fs.writeFile
//Parametros
//1 File: String con el nombre del archivo
//2 Data: Informacion en string que enviaremos al archivo
//3 Callback:FUncion que sera llamada cuando termine 
//de escribirse el archivo


fs.writeFile( "avengers.json", stringifyAvengers, () =>
console.log("escritura correcta"));

//ejecutamos con npm run write
