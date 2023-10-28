//Iteración #2: Condicionales avanzados



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


alumns.forEach((alumno)=>{ 
alumno.isApproved = true;
});



alumns.forEach((alumno,index) =>{
    const aprobados =[];
    const trimestresAprobados = [alumno.T1, alumno.T2, alumno.T3];//hago un arrayde arrays con los trimestres de cada alumno 
    //console.log(trimestresAprobados);
    //sale esto
    //[ false, false, true ]
    //[ true, false, true ]
    //[ false, true, true ]
    //[ false, false, false ]
    //[ true, true, true ]
    const conteo = trimestresAprobados.filter(trimestresAprobados=> !trimestresAprobados == false); //hago un filtro y saco un array con los falsos
   //console.log(conteo)
   ///Sale esto
    //[ true ]
    //[ true, true ]
    //[ true, true ]
    //[]
    //[ true, true, true ]

    if(conteo.length >= 2){      
        aprobados.push(alumno);
console.log(aprobados);
    } 
    });     
       

 

//Pista a la hora de recorrer un array y poder meter en el objeto una nueva propiedad
//deberás asignar a ese array por indice una propiedad tal que así

//nombreLista[indice].nombrePropiedad = valor;