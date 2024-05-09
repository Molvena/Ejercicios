//El método pop() elimina el último elemento de un array y lo devuelve. 
//Este método cambia la longitud del array.


function popCustom(array) {
    if(array.length === 0)
        return undefined; //validamos la condicion del array
    
        const ultimoElemento = array[array.length-1];
        array.length= array.length-1;
 

    return  ultimoElemento
};


const num = [1,2,3,8,7,9] 

const resultado = popCustom(num);

console.log(resultado)