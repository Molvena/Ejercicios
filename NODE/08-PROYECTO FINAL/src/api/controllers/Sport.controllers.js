// Traemos la funcion de borrado de imagenes por si al subir
// un nuevo Sport hay un error, que esa imagen se borre 
const  {deleteImgCloudinary} = require("../../middleware/files.middleware");

//Requiero los modelos de Sport y Athlete

const Athlete = require("../../api/models/Athlete.model");
const Sport = require("../models/Sport.model");

// --------------------------------------------------------
//?------------------------POST CREATE --------------------
// --------------------------------------------------------

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

// --------------------------------------------------------
//?-----------------------PATCH TOGGLE --------------------
// --------------------------------------------------------
//Hacemos un Toggle Athletes para  meter o quitar Athlets del Sport

const toogleAthletes = async (req, res, next) => {
    try {
        //Destructuring del id de los params
        //va a ser el id de un sport
        const { id } = req.params;
        //cogemos los athletes del body. Nos devuelve un array de ids
        const { athletes } = req.body;
        //Buscamos el sport a actualizar (por id)
        const sportId = await Sport.findById(id);

        if(sportId) {
            //Cogemos lo traido por el body y lo convertimos en un array 
            //con split "," (metodo de js)
            const arrayAthletes = athletes.split(",");

            //recorremos el arrayAthletes(array de ids) 
            // -> ["12343432","72369469367"] con un map 
            //y comprobamos si estan en el sport
            //si no estan lo metemos, si estan lo sacamos
            //Lo metemos en una promesa porque el mapeo es asíncrono 
            //y así no tenemos problemas
            //(hasta que no termines el mapeo, no lo hagas)

            Promise.all(
                arrayAthletes.map(async(athlete) =>{
                    if(sportId.athletes.includes(athlete)){
                        //Si lo incluye, lo quitamos
                        try {
                            //Buscamos el sport a actualizar
                            //y quitamos el athlete del array de athletes
                            await Sport.findByIdAndUpdate(id,{
                                $pull: { athletes: athlete },
                            });
                            //1er parametro el filtro
                            //2º parametro la acción
                            try {
                                //buscamos el athlete y le quitamos el sport
                                await Athlete.findByIdAndUpdate(athlete, {
                                    $pull: {sports: id}
                                });                                
                            } catch (error) {
                                //athlete no actualizado
                                return res.status(409).json({
                                    error: "Error al actualizar el Athlete, quitarle el Sport",
                                    message: error.message,
                                });
                            };
                        } catch (error) {
                         //sport no actualizado  
                         return res.status(409).json({
                            error: "Error al actualizar el Sport, quitarle al athlete",
                            message: error.message,
                         });
                        };                      
                    } else {
                        //si no lo incluye lo añadimos
                        try {
                            //Buscamos el sport a actualizar
                            //y añadimos el athlete en el array de athletes
                            await Sport.findByIdAndUpdate(id,{
                                $push:{athletes: athlete}
                            });
                            try {
                                //Buscamos el Athlete a actualizar y le añadimos el Sport
                                await Athlete.findByIdAndUpdate(athlete, {
                                    $push:{sports: id}
                                });
                            } catch (error) {
                                //Error Athlete no actualizado
                                return res.status(409).json({
                                    error:"Error al actualizar la Athlete, al añadirle el sport"
                                });
                            };                                                 
                        } catch (error) {
                            //Error sport no actualizado
                            return res.status(409).json({
                                error: "Error al actualizar el Sport, Athlete no añadido"
                            });                            
                        };
                    }
                })
            ).then(async () =>{
                //cerramos la promesa con .then
                return res.status(200).json(
                    await Sport.findById(id).populate("athletes"));
            });
            
        } else {
            //No existe el Sport a actualizar
            return res.status(404).json("No se encuentra el Sport a actualizar");
        }   
    } catch (error) {
        //Error al actualizar el sport
        return res.status(404).json({
            error:"No se encuentra el Athlete a actualizar",
            message: error.message});
    }
};

// --------------------------------------------------------
//?-----------------------------GET ALL --------------------
// --------------------------------------------------------

const getAllSports = async(req, res, next) => {
    try {
        // Traemos todos los elementos de la coleccion
        const allSports = await Sport.find();
        // Find nos devuelve un array con todos los elementos coincidentes
        if(allSports.length > 0) {
            return res.status(200).json(allSports);
        } else {
            return res.status(404).json("No se han encontrado Sports")
        }       
    } catch (error) {
        return res.status(409).json({
            error: "Error al buscar Sports",
            message: message.error
        });
    }
};



// --------------------------------------------------------
//?-----------------GET BY NAME ---------------------------
// --------------------------------------------------------



// --------------------------------------------------------
//?------------------GET BY id ----------------------------
// --------------------------------------------------------







// --------------------------------------------------------
//?---------------DELETE ----------------------------------
// --------------------------------------------------------

module.exports = {
    createSport,
    toogleAthletes,
    getAllSports
};