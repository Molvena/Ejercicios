//Es un identificador único y seguro para autentificar y autorizar las 
//solicitudes entre entre un cliente y un servidor.
//Incluye las cabeceras de las solicitudes HTTP para verificar la identidad del usuario
//El token te da acceso a tu rol, con el que tendre unos permisos u otrs, diferentes visualizaciones, etc
//Se suele guardar en cookies o en local Storage
//No esta asociado al usuario y tiene un tiempo de expiración( pe 1 dia)

//Importamos dotenv y ejecutamos
//Importamos librería jsonwebtoken, para crear token

const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");

//Creamos una función que nos genera el token
//recibe el email y el id del usuario

const generateToken = (id,email) => {
   // Si no recibe el id o el email mandamos un error

  if (!id || !email) {
    throw new Error("Falta el email o Id");
  }
  //Si lo recibido es correcto, registranos la petición
  //Usamos el método .sign() de jwt
  //recibe por parámetos la palabra secreta (.env) y la expiración

  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//Hacemos la función que verifica el token

const verifyToken = (token) => {
  //verificamos si recibimos el token por parametros
  //para generar un error, si no es asi
  //Aqui genero el error con trow porque no tengo acceso a la req

  if (!token) {
    throw new Error("Sin token");
  }
// si lo recibimos hay que decodificarlo
//para saber si es valido y obtener la info con lo que ha sido creado (email, id)
//metodo .verify(el token recibido en los parametros, clave seccreta de las vbles de entorno) 
  return jwt.verify(token, process.env.JWT_SECRET);
};


//Exportamos las dos funvciones

module.exports ={
    generateToken,
    verifyToken
}