//**Iteración #6: Función swap**

//Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
//La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
//Retorna el array resultante.







const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

const swap = (array,index1, index2) =>{

const copyArray = [...array];

const posicionArray1 = copyArray[index1];  
const posicionArray2 = copyArray[index2];

copyArray.splice(index1,1,posicionArray2);
copyArray.splice(index2,1,posicionArray1);

return copyArray;
}


console.log(swap(players,2,3));