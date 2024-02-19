// Traemos la funcion de borrado de imagenes por si al subir
// un nuevo Sport hay un error, que esa imagen se borre 
const  {deleteImgCloudinary} = require("../../middleware/files.middleware");

//Requiero los modelos de Sport y Athlete

const Athlete = require("../../api/models/Athlete.model");
const Sport = require("../models/Sport.model");

//?  CREATE

const createSport = async(req, res, next) =>{
    //Si tenemos una imagen que nos viene por el req.file la guardamos 
    //en una constante
    //nos llega en el req.file que es un objeto, en la clave path
    let catchImg = req.file?.path;

    //Actualizamos indexes
    try{
        //Con el try catch hacemos los indexes que son los indices propios
        //de los datos(claves únicas), para que si hay un modificado posterior 
        //a la creación del controlador no se modifique
        await Sport.syncIndexes();
        //Creamos el nuevo Sport

        const newSport = new Sport(req.body);

        //Comprobamos si hay imagen para añadirla al body
        //Si no, una por defecto
        if(catchImg) {
            newSport.image = catchImg;
        } else {
            newSport.image = "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1708370591/Foro-virtual-El-deporte-dentro-y-fuera-de-la-cancha-2_quvlx8.jpg"
        };

        //ahora guardamos el Sport creado
        const saveSport = await newSport.save();

        //Comprobamos si se ha creado el Sport para lanzar la respuesta

        if(saveSport) {
            return res.status(200).json(saveSport);
        } else {
            return res.status(404).json( "Error, no se ha creado el Sport");
        };
        
    } catch(error){
        //Error en la creación del Sport
        //Tenemos que borrar la imagen de cloudinary 
        //si es diferente a la que trae por defecto

        req.file?.path && deleteImgCloudinary(catchImg);
        next(error);
        return res.status(409).json("Error en la creacion del Sport");
        
    }
};

module.exports = {
    createSport,
};