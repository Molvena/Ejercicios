//Iteración #2: Condicionales avanzados

//este no me sale!!!!

//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados 
//y añade la propiedad isApproved a true o false en consecuencia. 
//Una vez lo tengas compruébalo con un console.log. 

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]


alumns.forEach((alumns)=>{ //para que me añada una propiedad en cada objeto tengo que ponerle dentro el nombre de la matriz alumns, si no, me añade un objeto al final con isApproved
alumns.isApproved = "";
});
console.log(alumns);

//Hago un condicional para cada objeto del array (for) para que isApproved sea true con dos trimestres aprobados

const evaluacion =[];
for(let i= 0 ; i< alumns.length; i++) {
    const trimestre = alumns[i];
    if (trimestre.id === "false" >= 2){
        isApproved ===false};
}
console.log(evaluacion);


//alumns.forEach((item, index)=>{ 
 //alumns[item]===false >= 2 && isApproved ===false;   
//});
console.log(alumns);

// HAGO UN FILTRO PRA QUE ME DEVUELVA SOLO EN LOS QUE isApproved sea true
const aprobados = alumns.filter(alumno => alumno.isApproved === true);

//console.log(aprobados);

//Pista a la hora de recorrer un array y poder meter en el objeto una nueva propiedad
//deberás asignar a ese array por indice una propiedad tal que así

//nombreLista[indice].nombrePropiedad = valor;