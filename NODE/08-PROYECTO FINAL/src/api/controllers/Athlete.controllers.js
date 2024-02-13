//Vamos a crear un controlador que nos va a crear un Athlete
//Usaremos insomnia, metemos el path y creamos la solicitud
//Nuestra base de datos se va a llenar

// Traemos la funcion de borrado de imagenes por si el usuario al subir
// un nuevo Athlete tiene un error que esa imagen se borre 

const {deleteImgCloudinary} = require("../../middleware/files.middleware");

//Nos traemos el enumOK para cuando necesite dar las opciones del enum

const enumOk = require("../../utils/enumOk");

//Nos traemos los modelos

const Athlete = require("../models/Athlete.model");
const Sport = require("../models/Sport.model");

//?  CREATE

const createAthlete = async (req, res, next) =>{
    //Si tenemos una imagen que nos viene por el req.file la guardamos 
    //en una constante
    //nos llega en el req.file que es un objeto, en la clave path
    let catchImg = req.file?.path;

    //Actualizamosindexes
    try{
        //Con el try catch hacemos los indexes que son los indices propios
        //de los datos(claves únicas), para que si hay un modificado posterior 
        //a la creación del controlador no se modifique
        await Athlete.syncIndexes();
        const newAthlete = new Athlete(req.body);
        //Comprobamos si hay imagen para añadirla al body
        if(catchImg) {
            newAthlete.image = catchImg;
        } else {
            //Si no hay imagen le ponemos una por defecto
            // let defaultImage = "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1707842081/Curso/silueta-atleta-gotas-pintura_23-2147492712_fm3do8.avif"
            // newAthlete.image = defaultImage;
            newAthlete.image = "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1707842081/Curso/silueta-atleta-gotas-pintura_23-2147492712_fm3do8.avif"
             

        };
        //Ahora guarabdamos el Athlete creado

        const saveAthlete = await newAthlete.save();

        //Comprobamos si de ha guardado el Athlete para lanzar una respuesta
        if(saveAthlete) {
            return res.status(200).json(saveAthlete);

        } else {
            //error. no se ha guadado el athlete
            return res.status(404).json("Error. No se ha creado el Athlete");
        }



    } catch(error) {
        //Error en la creación del Athlete
        //Tenemos que borrar la imagen de cloudinary 
        //si es diferente a la que trae por defecto
        req.file?.path && deleteImgCloudinary(catchImg);
        next(error);

        return res.satus(409).json("Error en la creación del Athlete");
    }  
};


module.exports = {
    createAthlete,
}