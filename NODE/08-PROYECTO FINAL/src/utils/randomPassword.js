//Creamos una funcióon que nos genera una contraseña
//segura y diferente cada vez
//Es temporal, para cuando se olvida la contraseña

const randomPassword = () => {
    const randomString = "*@!=&$";
    const passwordSecure = `${Math.random().toString(36).slice(-4)}${
      randomString[Math.floor(Math.random() * 5)]
    }${randomString[Math.floor(Math.random() * 5)]}${Math.random()
      .toString(36)
      .slice(-4)
      .toUpperCase()}${randomString[Math.floor(Math.random() * 5)]}${
      randomString[Math.floor(Math.random() * 5)]
    }`;
  
    return passwordSecure;
  };
  
  module.exports = randomPassword;