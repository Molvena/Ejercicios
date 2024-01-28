
//Hacemos una cosntante en la que voy a meter el gender
//Copiamos del models las opciones que tenemos 
//HAcemos un condicional. Si lo incluye Ok
//Si no lo incluye X


const enumOk = (gender) => {
    const enumGender = ["hombre", "mujer", "otro"];
    if (enumGender.includes(gender)) {
      return { check: true, gender };
    } else {
      return { check: false };
    }
  };
  
  module.exports = enumOk;
  