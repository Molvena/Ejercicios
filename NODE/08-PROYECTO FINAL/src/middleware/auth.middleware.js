//Es un middleware como el de subida de ficheros, 
//pero lo que hace es comprobar que la persona que entra 
//a las rutas autenticadas esta autorizada para hacerlo
//El método que utiliza es un token que genera la libreria JSONwebtoken
//este lo generamos nosotros manualmente, por eso va entre corchetes

//Importaciones
//Nos traemos el modelo de User para buscar al usuario que hace la solicitud
// mediante el id que trae el token --> decodificacion

const User = require("../api/models/User.model");

//Requerimos verifyToken que la hemos creado en token.js

const { verifyToken } = require("../utils/token");

const dotenv = require("dotenv");
dotenv.config();

//HAcemos una función para saber si estas autenticado isAuth
//(=token válido) da igual el rol 

const isAuth = async(req, res, next) => {
  //tenemos que quedarnos con el token que viene en el encabezado de la solicitud 
  //hay que quitar la palabra BEARER que viene donde el token 
  //reemplazamos bearer y ponemos un string vacio ""
  //metemos optional chaining para que no rompa
  const token = req.headers.authorization?.replace("Bearer ", "");
  //Si no existe token lanzamos un error
  if(!token) {
    return next(new Error("No autorizado"));
  }
  try{
    //Si hay token le pedimos que nos de la info con la que se creo(id, mail)
    //Hay que decodificarlo usando la libreria 
    //Como primer parametro tenemos el token y como segundo la palabra secreta
    //Que nos traemos del dotenv
    const decoded = verifyToken(token, process.env.JWT_SECRET);

    console.log("decoded", decoded);
    //Creamos el req.user con todos los datos del usuario
    //Cuando llegue al controlador tendre todos los datos de mi usuario
    //lo buscamos por id
    req.user = await User.findById(decoded.id);

    // Como no hemos puesto return le decimos que continue con next
    next();

  } catch(error) {
    return res
        .status(409)
        .json({error:"Problemas con el token", message: error.message});
  }
};
//vamos a crear otra autorización solo para los admin,
// sino eres admin no tienes permiso
//Es todo igual que antes pero al final le metemos la condicion 
//de que si no eres admin te devuelve no autorizado

const isAuthAdmin = async (req, res, next) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    // comprobamos si hay token y sino lanzamos un error 
    if (!token) {
      return next(new Error("No autorizado"));
    }
  
    try {
      const decoded = verifyToken(token, process.env.JWT_SECRET);
  
      console.log("decoded", decoded);
  
      //CREAMOS EL REQ.USER con todos los datos del usuario
      // --> en la solicitud tenemos los datos del user
  
      req.user = await User.findById(decoded.id);
  
      // Comprobamos que el rol sea de admin
      if (req.user.rol !== "admin") {
        return next("No autorizado, no eres admin");
      }
  
      // Si eres admin continuamos
    } catch (error) {}
  };
  
  module.exports = { isAuth, isAuthAdmin };