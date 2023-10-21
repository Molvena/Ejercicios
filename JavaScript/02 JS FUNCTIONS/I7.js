
  //Iteración 7

  const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

   
    const finderName = ((array,name) =>{
        if (array.includes(name)) {
        const position = array.indexOf(name);
        console.log(`true ${position}`);
        }else{
          console.log("false");
        }});
      
      // esto no funciona porque no puedo meter dos cosas en un ternario? array.includes(name)?console.log("true") && console.log(indexOf()): console.log ("false")});
      //Si que se pueden poner dos condiciones, pero que ejecute dos acciones no
     
      
        finderName(nameFinder, "Elena");
        finderName(nameFinder, "Bruce");
     
     
        
    
  
