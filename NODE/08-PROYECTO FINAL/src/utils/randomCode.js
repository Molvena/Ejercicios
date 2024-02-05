// Creamos una función que crea un numero random que será enviado al email
// como el codigo aleatorio de confirmacion y guardado en el user
//Lo hacemos en utils para poder usarlo mas veces

const randomCode = () => {
    let code = Math.floor(Math.random() * (999999 - 100000) + 1000000);
    return code;
  };
  
  module.exports = randomCode;