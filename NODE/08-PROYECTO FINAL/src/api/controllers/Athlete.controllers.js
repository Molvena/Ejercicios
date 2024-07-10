//Vamos a crear un controlador que nos va a crear un Athlete
//Usaremos insomnia, metemos el path y creamos la solicitud
//Nuestra base de datos se va a llenar

// Traemos la funcion de borrado de imagenes por si al subir
// un nuevo Athlete hay un error, que esa imagen se borre 

const {deleteImgCloudinary} = require("../../middleware/files.middleware");

//Nos traemos el enumOK para cuando necesite dar las opciones del enum

const enumOk = require("../../utils/enumOk");

//Nos traemos los modelos

const Athlete = require("../models/Athlete.model");
const Comment = require("../models/Comment.model");
const Sport = require("../models/Sport.model");
const User = require ("../models/User.model");


// --------------------------------------------------------
//?------------------------POST CREATE --------------------
// --------------------------------------------------------

const createAthlete = async (req, res, next) =>{
    //Si tenemos una imagen que nos viene por el req.file la guardamos 
    //en una constante
    //nos llega en el req.file que es un objeto, en la clave path
    let catchImg = req.file?.path;
    console.log("req.body",req.body)


    //Actualizamos indexes
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
            
            newAthlete.image = "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1707842081/Curso/silueta-atleta-gotas-pintura_23-2147492712_fm3do8.avif"
             

        };
        //Ahora guarabdamos el Athlete creado

        const saveAthlete = await newAthlete.save();

        //Comprobamos si de ha guardado el Athlete para lanzar una respuesta
        if(saveAthlete) {
            return res.status(200).json(saveAthlete);

        } else {
            //error. no se ha guadado el athlete
            return res.status(404).json("Error, no se ha creado el Athlete");
        }



    } catch(error) {
        //Error en la creación del Athlete
        //Tenemos que borrar la imagen de cloudinary 
        //si es diferente a la que trae por defecto
        req.file?.path && deleteImgCloudinary(catchImg);
        next(error);

        return res.status(409).json("Error en la creación del Athlete");
    }  
};


// --------------------------------------------------------
//?-----------------------------GET ALL -------------------
// --------------------------------------------------------
const getAllAthletes = async (req, res, next) => {
    //Traemos todos los elementos con .find()
    //que nos devuelve un array con todos los elementos coincidentes
    try {
        const allAthletes = await Athlete.find().populate("sports");
        //Si el array se ha llenado lanzamos respuesta correcta
        //y el array con todos los athletes    
        if(allAthletes.length >0) {
            return res.status(200).json(allAthletes);
        } else {
        //error no se ha llenado el array
        return res.status(404).json("No se han encontrado Athletes");
        };
    } catch (error) {
        return res.status(409).json({
            error: "Error al buscar Athletes",
            message: error.message
        });
    }    
};

// --------------------------------------------------------
//?---------------TOOGLE AÑADIR SPORT -------------------
// --------------------------------------------------------
//Hacemos un Toggle Sport para  meter o quitar Sports del Athlete

const toogleSport = async (req, res, next) => {
    try {
        //Destructuring del id de los params
        //va a ser el id de un Athlete
        const { id } = req.params;
        //cogemos los sports del body. Nos devuelve un array de ids
        const { sports } = req.body;
        //Buscamos el athlete a actualizar (por id)
        const athleteId = await Athlete.findById(id);

        if(athleteId) {
            //Cogemos lo traido por el body y lo convertimos en un array 
            //con split "," (metodo de js)
            
            const arraySports = sports.split(",");

            //recorremos el arraySports(array de ids) 
            // -> ["12343432","72369469367"] con un map 
            //y comprobamos si estan en el Athlete
            //si no estan lo metemos, si estan lo sacamos
            //Lo metemos en una promesa porque el mapeo es asíncrono 
            //y así no tenemos problemas
            //(hasta que no termines el mapeo, no lo hagas)

            Promise.all(
                arraySports.map(async(sport) =>{
                    if(athleteId.sports.includes(sport)){
                        //Si lo incluye, lo quitamos
                        try {
                            //Buscamos el athlete a actualizar
                            //y quitamos el sport del array de sports
                            await Athlete.findByIdAndUpdate(id,{
                                $pull: { sports: sport },
                            });
                            //1er parametro el filtro
                            //2º parametro la acción
                            try {
                                //buscamos el sport y le quitamos el athlete
                                await Sport.findByIdAndUpdate(sport, {
                                    $pull: {athletes: id}
                                });                                
                            } catch (error) {
                                //sport no actualizado
                                return res.status(409).json({
                                    error: "Error al actualizar el Sport, quitarle el Athlete",
                                    message: error.message,
                                });
                            };
                        } catch (error) {
                         //athlete no actualizado  
                         return res.status(409).json({
                            error: "Error al actualizar el Athlete, quitarle al Sport",
                            message: error.message,
                         });
                        };                      
                    } else {
                        //si no lo incluye lo añadimos
                        try {
                            //Buscamos el athlete a actualizar
                            //y añadimos el sport en el array de sports
                            await Athlete.findByIdAndUpdate(id,{
                                $push:{sports: sport}
                            });
                            try {
                                //Buscamos el Sport a actualizar y le añadimos el Athlete
                                await Sport.findByIdAndUpdate(sport, {
                                    $push:{athlete: id}
                                });
                            } catch (error) {
                                //Error Sport no actualizado
                                return res.status(409).json({
                                    error:"Error al actualizar Sport, al añadirle el Athlete"
                                });
                            };                                                 
                        } catch (error) {
                            //Error Athlete no actualizado
                            return res.status(409).json({
                                error: "Error al actualizar el Athlete, Sport no añadido"
                            });                            
                        };
                    }
                })
            ).then(async () =>{
                //cerramos la promesa con .then
                return res.status(200).json(
                    await Athlete.findById(id).populate("sports"));
            });
            
        } else {
            //No existe el Athlete a actualizar
            return res.status(404).json("No se encuentra el Athlete a actualizar");
        }   
    } catch (error) {
        //Error al actualizar el athlete
        return res.status(404).json({
            error:"No se encuentra el Sport a actualizar",
            message: error.message});
    }
};
// --------------------------------------------------------
//?------------------------PATCH UPDATE -------------------
// --------------------------------------------------------

//Campos del Athlete: name, gender, year, country, 
//image, sports, activo, likes y comments

const updateAthlete = async (req, res, next) => {
    try {
        console.log("dentro");
        //comprobamos si en la solicitud hay una imagen
        //si la hay nos la pueden cambiar
        //ponemos el optional chaining para que no rompa si no la hay
        let catchImg = req.file?.path;

        //sincronizamos indexes
        await Athlete.syncIndexes();

        //Desectructuramos el id de los params
        //el id del athlete a actualizar
        const { id } = req.params;

        //Buscamos el Athlete una vez que tenemos el id
        const athleteById = await Athlete.findById(id);
        
        //Si existe el elemento se puede actualizar
        if (athleteById) {
            //Guardamos la imagen que tiene el character en la BD en una vble
            //por si después hay que borrarla, tener acceso
            const oldImg = athleteById.image;

            //Creamos una vble custom con los datos del body
            //El id es el mismo, no se actualiza
            //La imagen si la hay, viene por req.file.path
            //Hago ternarios. Si trae imagen la actualizas, si no me pones la que tenia
            //y meto optional chaining para que no rompa si no lo trae

            const bodyCustom = {
                _id: athleteById.id,
                image: req.file?.path ? catchImg: oldImg,
                name: req.body?.name ? req.body?.name: athleteById.name,
                year: req.body?.year? req.body.year: athleteById.year,
                country: req.body?.country? req.body.country: athleteById.country,
                sports: req.body?.sports? req.body.sports: athleteById.sports,
                activo: req.body?.activo? req.body.activo: athleteById.activo,
                
            };
            console.log("body",bodyCustom);

            // comprobamos si recibimos por el body el genero
            if (req.body?.gender) {
                // Si lo recibimos llamamos a la función de utils que valida el genero
                 const resultEnumOk = enumOk(req.body?.gender);
                bodyCustom.gender = resultEnumOk.check
                ? req.body?.gender
                : characterById.gender;
            };
                //Ahora buscamos el character por el id y lo actualizamos con el customBody
                //Para ello usamos findByIdAndUpdate
                try {
                    await Athlete.findByIdAndUpdate(id,bodyCustom);
                    console.log("oldImg",oldImg);

                    //si se ha actualizado la imagen borramos la antigua
                    //siempre que sea diferente a la por defecto
                    if(req.file?.path) {
                        oldImg!== "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1707842081/Curso/silueta-atleta-gotas-pintura_23-2147492712_fm3do8.avif"
                        && deleteImgCloudinary(oldImg);                        
                    }

                    //hacemos el test en tiempo real
                    //buscamos el athlete ya actualizado por el id
                    const updateAthlete = await Athlete.findById(id);
                    //Cogemos el req.body y vemos las claves que se han actualizado
                    //mediante Object.keys
                    const elementUpdate = Object.keys(req.body);
                    //creamos un objeto vacio donde vamos a meter este test

                    let test = {};
                    

                    //Recorremos las claves del body con un forEach
                    //Por cada item compruebo si las claves del body
                    //con un if por si existen,son iguales a las del character actuallizado
                    //si son iguales test ok, si no test no ok

                    elementUpdate.forEach((key) => {
                        if(req.body[key] === updateAthlete[key]) {
                            test[key] === true;
                        } else {
                            test[key] === false;                        
                        };
                        
                    });
                    
                       //Comprobamos que la imagen del caracter Actualizado 
                       //coincide con la imagen nueva si la hay
                       //Si coinciden creamos una copia de test 
                       //con una nueva clave que será file en true 
                       //y si no estará en false

                       if(catchImg) {
                        updateAthlete.image === catchImg?
                        (test = {...test, file: true}) :
                        (test = {...test, file : false})
                       };
                       console.log("test", test);

                       //hacemos un contador para comprobar que ninguna clave esta en false
                       //recorremos el test con un for in porque es un objeto
                       //si hay alguna clave en false, sumamos 1 al contador

                       let acc = 0;
                       for (const key in test) {
                        test[key] === false && acc++;    
                                     
                       };
                       

                       //Si acc es mayor que cero sumamos 1 al contador

                       if(acc > 0) {
                        return res.status(409).json({dataTest: test , update:false});
                       } else {
                        return res.status(200)
                        .json({message: "Athlete actualizado correctamente", dataTest: test, update: updateAthlete });
                       };
                       

                } catch (error) {
                    //No se ha podido actualizar
                    
                    return res.status(409).json({
                        error: "El athlete no se ha actualizado correctamente",
                        message: error.message,
                      });
                }

        } else {
            //No se encuentra el atlethe a actualizar
            return res.status(404).json("El athlete a actualizar no ha sido encontrado");
        };

    } catch (error) {
        //Error general al actualizar el athlete
        return res
      .status(409)
      .json({ error: "Error general al actualizar el athlete", message: error.message });
    }
};


// --------------------------------------------------------
//?------------------getById ------------------------------
// --------------------------------------------------------

const getByIdAthlete = async(req,res,next) => {
    //traemos el id de los params
    try {
        const { id } = req.params;
        //encontramos al athlete que tenga ese id

        const athleteById = await Athlete.findById(id).populate("sports");

        //comprobamos si se ha encontrado al athlete

        if(athleteById) {
            return res.status(200).json(athleteById)
        } else {
            return res.status(404).json("No se ha encontrado al Athlete");            
        }
        
    } catch (error) {
      //error al buscar por id  
      return res.status(409)
      .json({error: "Error al buscar por id", message: error.message})
    }
};

// --------------------------------------------------------
//?-----------------GET BY COUNTRY ------------------------
// --------------------------------------------------------

const getByCountry = async(req, res, next) => {
    try {
       //Hacemos destructuring del pais traido por params 
       //y buscamos el pais que coincide
       const { country } = req.params;
       const athleteByCountry = await Athlete.find({country});
       //El find me devuelve un array con los athletes que tienen ese country
        //Si su longitud es >o la respuesta es correcta
        if(athleteByCountry.length > 0) {
            return res.status(200).json(athleteByCountry)
        } else {
            return res.status(404).json("No se ha encontrado el athlete")
        };    

    } catch (error) {
        return res.status(409).json({
            error: "Error general al buscar",
            message: error.message});
    }
};

// --------------------------------------------------------
//?-------------- TOOGLE ACTIVO/NO ACTIVO -----------------
// --------------------------------------------------------

const addActivo = async(req, res, next) => {
    try {
        //desectructuramos el id del athlete traido por params
        const {idAthlete} = req.params;

        //Busco al athlete por su id
        const findAthlete = await Athlete.findById(idAthlete);
        

        //si esta activo lo actualizo poniendolo no activo

        if(findAthlete.activo === true) {
            try {
                await Athlete.findByIdAndUpdate(idAthlete, {activo: false});
                    return res
                    .status(200)
                    .json({findAthlete: await Athlete.findById(idAthlete)});
            } catch (error) {
                return res.status(409)
                .json({
                  error: "Error al pasar el athlete a activo",
                  message:error.message
                });                
            };
        } else {
            try {
                await Athlete.findByIdAndUpdate(idAthlete, {activo: true});
                    return res
                    .status(200)
                    .json({findAthlete: await Athlete.findById(idAthlete)});
            } catch (error) {
                return res.status(409)
                .json({
                  error: "Error al pasar el athlete a no activo",
                  message:error.message
                });                
            };
        };   
        
    } catch (error) {
        return res.status(409)
        .json({
          error: "Error al actualizar activo/no activo el athlete",
          message:error.message
        });        
    }
};

// --------------------------------------------------------
//?-------------------- DELETE ----------------------------
// --------------------------------------------------------

//Borramos el athlete cuyo id traemos por params

const deleteAthlete = async (req, res, next) => {
  try {
    
    const { id } = req.params;
    
    //buscamos el athlete
    const athlete = await Athlete.findById(id);
    //Comprobamos si existe para borrarlo
    

    if(athlete) {
        await Athlete.findByIdAndDelete(id);
        //Lo buscamos y si no existe
        //borramos su imagen de cloudinary si es diferente a la por defecto
        const findAthlete = await Athlete.findById(id);
        
        if(!findAthlete) {
            //console.log("entro", id);
            //estos console.log los vamos poniendo a ver donde esta el error
            athlete.image !== "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1707842081/Curso/silueta-atleta-gotas-pintura_23-2147492712_fm3do8.avif"
             deleteImgCloudinary(athlete.image);
              //Actualizamos
            try {
                //Sports que en su campo de Athletes tengan el id del athlete borrado
                await Sport.updateMany(
                    {athletes: id},
                    {$pull: {athletes: id}}
                );
                try {
                    console.log("entro", id);
                    //Users que le hayan dado al like al athlete
                    await User.updateMany(
                        { athletesFav: id},
                        { $pull: {athletesFav: id}}                        
                    );
                    try {
                        console.log("entro");  
                        //Comments que tengan al athlete de recipient athlete ---> lo borramos
                          await Comment.deleteMany(
                            {recipientAthlete: id}
                          );
                        console.log(athlete.comments);
                          Promise.all(
                            //tenemos que hacer una promesa porque recorremos los comentarios y hay una asincronía
                            //y actualizamos:
                             //al owner del comentario
                             //al user que le dio like al comentario
                            athlete.comments.map(async (comment) => {
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
                            return res.status(200).json("Athlete borrado");
                          });
                    } catch (error) {
                        //Error al borrar el cometario dirigido al athlete
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
               //error al actualizar el sport 
               return res.status(409).json({
                error: "Error al actualizar el Sport",
                message: error.message,
              });
            };
        } else {
            // El Athlete no se ha borrado
            return res.status(409).json({
              error: "Error al borrar el Athlete",
              message: "Athlete no borrado",
            });
          }
    } else {
        // El Athlete no existe
        return res.status(409).json({
          error: "Error al buscar el Athlete",
          message: "El Athlete no existe",
        });
      }

  }catch (error) {
    //error general al borrar el athlete
    return res.status(409).json({
        error: "Error general al borrar el Athlete",
        message: error.message,
      });
    }                
  } ;





module.exports = {
    createAthlete,
    getAllAthletes,
    updateAthlete,
    toogleSport,
    getByIdAthlete,
    getByCountry,
    addActivo,
    deleteAthlete
}