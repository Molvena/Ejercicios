// Traemos la funcion de borrado de imagenes por si al subir
// un nuevo Sport hay un error, que esa imagen se borre 
const  {deleteImgCloudinary} = require("../../middleware/files.middleware");

//Requiero los modelos de Sport y Athlete

const Athlete = require("../../api/models/Athlete.model");
const Sport = require("../models/Sport.model");
const User = require("../models/User.model");
const Comment = require("../models/Comment.model");

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
//?-----------------------PATCH toogleAthletes --------------------
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
        const allSports = await Sport.find().populate("athletes");
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
//?------------------getById-------------------------------
// --------------------------------------------------------

const getByIdSport = async(req, res, next) => {
    //traemos el id de los params(de un sport)
    try {
            const { id } = req.params;
            //buscamos el sport por su id
            //y populamos los athletes
            const sportById = await Sport.findById(id).populate("athletes");
            //Hacemos un condicional. Si existe es que lo ha encontrado =>200
            //Si no existe error

            if(sportById) {
                return res.status(200).json(sportById)

            } else {
                return res.status(404).json("No se ha encontrado el sport");
            };        
    } catch (error) {
        return res.status(409).json({
            error:"Error al buscar por id", 
            message:error.message})        
    }
};

// --------------------------------------------------------
//?-----------------GET BY NAME ---------------------------
// --------------------------------------------------------

const getByName = async(req, res, next) => {
    try {
        //Hacemos destructuring del name traido por params
        //Y buscamos el sport que coincide con el name
        const { name } = req.params;
        const sportByName = await Sport.find({name});
        console.log("array", sportByName);
        //El find me devuelve un array con los sport que tienen ese name
        //Si su longitud es >o la respuesta es correcta
        if(sportByName.length > 0) {
            return res.status(200).json(sportByName)
        } else {
            return res.status(404).json("No se ha encontrado el sport")
        };        
        
    } catch (error) {
        return res.status(409).json({
            error: "Error general al buscar",
            message: error.message});
    }
};

// --------------------------------------------------------
//?-----------------GET BY OLIMPICO------------------------
// --------------------------------------------------------

//como un getall, no hace falta meter nada por params
//tendre que hacer un filtro en e el que diga que olimpico sea true
//tambien cn un find, pero no es aqui sino en los sports
const getOlympics = async(req, res, next) => {
    try {
        // Traemos todos los elementos de la coleccion
        const allSports = await Sport.find();
        console.log("allSports", allSports);
        // Find nos devuelve un array con todos los elementos coincidentes
        //Hago un condicional en el que me devuelve todos en los que el booleano olimpico sea true
        //Creamos un array vacio donde voy a meter todos los olimpicos
        const olympics = [];


       allSports.forEach((sport) => {
        if(sport.olimpico === true) {
            olympics.push(sport);
        }        
       });
        //console.log("olimpics" , olympics);
        if(olympics.length > 0) {
            return res.status(200).json(olympics);
        } else {
            return res
            .status(404)
            .json("No se ha encontrado nigún deporte olímpico")
        };   
       
    } catch (error) {
        return res.status(409)
        .json({
            error: "Error general al buscar olímpicos",
            message: error.message})
        
    }
};


// --------------------------------------------------------
//?---------------DELETE ----------------------------------
// --------------------------------------------------------

//Borramos el sport cuyo id traemos por params

const deleteSport = async (req, res, next) => {
    try {
  
      const { id } = req.params;
      //buscamos el Sport
      const sport = await Sport.findById(id);
      //Comprobamos si existe para borrarlo
  
      if(sport) {
          await Sport.findByIdAndDelete(id);
          //Lo buscamos y si no existe
          //borramos su imagen de cloudinary si es diferente a la por defecto
          const findSport = await Sport.findById(id);
          
          if(!findSport) {
              sport.image !== "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1708370591/Foro-virtual-El-deporte-dentro-y-fuera-de-la-cancha-2_quvlx8.jpg"
               deleteImgCloudinary(sport.image);
                //Actualizamos
              try {
                  //Athletes que en su campo de Sport tengan el id del Sport borrado
                  await Athlete.updateMany(
                      {sport: id},
                      {$pull: {sport: id}}
                  );
                  try {
                      //Users que le hayan dado al like al sport
                      await User.updateMany(
                          { sportsFav: id},
                          { $pull: {sportsFav: id}}                        
                      );
                      try {
                            //Comments que tengan al sport de recipient sport ---> lo borramos
                            await Comment.deleteMany(
                              {recipientSport: id}
                            );
                          
                            Promise.all(
                              //tenemos que hacer una promesa porque recorremos los comentarios y hay una asincronía
                              //y actualizamos:
                               //al owner del comentario
                               //al user que le dio like al comentario
                              sport.comments.map(async (comment) => {
                                  await User.updateOne(
                                      { postedComments: comment },
                                      { $pull: { postedComments: comment } }
                                  );
                                  await User.updateOne(
                                      { commentsFav: comment },
                                      { $pull: {commentsFav: comment }}
                                  );
                              })
                            ).then(async () => {
                              return res.status(200).json("Sport borrado");
                            });
                      } catch (error) {
                          //Error al borrar el cometario dirigido al sport
                          return res.status(409).json({
                              error: "Error al borrar los Comments",
                              message: error.message,
                            });
                      };                
                  } catch (error) {
                  //error al actualizar el user
                  return res.status(409).json({
                      error: "Error al actualizar el User",
                      message: error.message,
                    });
                  };                
              } catch (error) {
                 //error al actualizar el Athlete 
                 return res.status(409).json({
                  error: "Error al actualizar el Athlete",
                  message: error.message,
                });
              };
          } else {
              // El Sport no se ha borrado
              return res.status(409).json({
                error: "Error al borrar el Sport",
                message: "Sport no borrado",
              });
            }
      } else {
          // El Sport no existe
          return res.status(409).json({
            error: "Error al buscar el Sport",
            message: "El Sport no existe",
          });
        }
  
    }catch (error) {
      //error general al borrar el Sport
      return res.status(409).json({
          error: "Error general al borrar el Sport",
          message: error.message,
        });
      }                
    } ;


module.exports = {
    createSport,
    toogleAthletes,
    getAllSports,
    getByIdSport,
    getByName,
    getOlympics,
    deleteSport
};