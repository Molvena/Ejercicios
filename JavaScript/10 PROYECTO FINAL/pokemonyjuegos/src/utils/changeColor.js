export const changeColorRGB = () => {
    // CREAMOS UNA FUNCION DENTRO DE LA PRINCIPAL
    const randomNumber = (min, max) => {
      min = Math.ceil(min);
      //DEVUELVE EL ENTERO MAYOR O IGUAL A UN NÚMERO DADO
      max = Math.floor(max);
      //DEVUELVE EL ENTERO MENOR O IGUAL A UN NÚMERO DADO
    const random = Math.floor(Math.random() * (max - min + 1) + min);
        //EL RANDOM SIEMPRE SE HACE CON ESA FORMULA (max - min + 1) + min
     
    //En realidad si le metemos numeros enteros no haria falta el ceil y el floor
    //Esto se hace pr buena prectica por si se le mete un decimal
      return random;
    };
    // LAMAMOS ESA FUNCION Y LE PASAMOS EL MIN Y MAX PARA GENERAR LOS RGB
    let R = randomNumber(0, 255); //EL RGB VA DEL 0 A 255(esos son el min y max)
    let G = randomNumber(0, 255);
    let B = randomNumber(0, 255);
    let A = Math.random();
  
    const color = `rgba(${R},${G},${B},${A})`;
    return color;
  };

  //ESTA FUNCION LA EXPORTAMOS AL ARCHIVO DE BARRIL index.js
  //y despues me voy al Header a hacer el escuchador del evento, porque es donde esta el boton.