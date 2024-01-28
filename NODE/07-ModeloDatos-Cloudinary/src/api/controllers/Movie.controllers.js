const Character = require("../models/Character.model");
const Movie = require("../models/Movie.model");

//? -------------------------------------------------------
//!--------------------- POST - CREATE --------------------
//? -------------------------------------------------------

//Hacemos una función que nos crea una movie
const createMovie = async (req, res, next) => {
    //Vamos al modelo para ver lo que nos llega por el movie
  console.log(req.body);
  try {
    await Movie.syncIndexes();

    // Creamos nueva instancia de Movie
    const newMovie = new Movie(req.body);

    // Guardamos ese registro en la db
    const saveMovie = await newMovie.save();

    // Si existe es que ha guardado de forma correcta --> 200
    if (saveMovie) {
      return res.status(200).json(saveMovie);
    } else {
      // Sino existe es que no se ha guardado --> 409
      return res.status(409).json("No se ha podido crear la Movie");
    }
  } catch (error) {
    //Metemos el json entre llaves porque es un objeto
    return res.status(409).json({
      error: "Error en la creación de nueva Movie",
      message: error.message,
    });
  }
};

//? -------------------------------------------------------
//!--------------------- GET - GET ALL --------------------
//? -------------------------------------------------------

const getAll = async (req, res, next) => {
  try {
    // Traemos todos los elementos de la coleccion
    const allMovies = await Movie.find();
    // Find nos devuelve un array con todos los elementos coincidentes

    if (allMovies.length > 0) {
      // Si hay registros lanzamos una respuesta correcta
      return res.status(200).json(allMovies);
    } else {
      // si no hay registros lanzamos una respuesta 404
      return res.status(404).json("No se han encontrado movies");
    }
  } catch (error) {
    // capturtamos el error
    return res
      .status(409)
      .json({ error: "Error al buscar movies", message: error.message });
  }
};

//? -------------------------------------------------------
//!--------------------- GET - GET By ID --------------------
//? -------------------------------------------------------


//Hacemos una función que nos devuelve un character por su id


const getById = async (req, res, next) => {
  try {
     //HAcemos el destructuring del id traido por params
     const { id } = req.params;
     //Buscamos el character que tenga ese id
     //.populate nos permite obtener los datos de los campos desplegados
     const movieById = await Movie.findById(id).populate("characters");
     //Comprobamos si se ha encontrado el character
    
     if (movieById) {
        return res.status(200).json(movieById);
     } else {
        return res.status(404).json("No se ha encontrado la movie");
     } 
  } catch (error) {
      return res
        .status(409)
        .json({ error: "Error al buscar por Id", message: error.message });
    }
};


//? -------------------------------------------------------
//!--------------------- GET - GET By NAME --------------------
//? -------------------------------------------------------  
      
//Hacemos una función que nos devuelve el character por name

const getByName = async(req, res, next) =>{
  //console.log(req);
  try {
     //Hacemos el destructuring del name traido por params
     const { name } = req.params;
     //buscamos el character que coincida con el name
     const movieByName = await Movie.find({name});
     console.log(movieByName);
     //Hacemos un condicional con la longitud del array
     //en el que hemos ido metiendo los nombres con el find
     //Si es >0  lo ha encontrado, si no es que no existe
     if(movieByName.length>0) {
        return res.status(200).json(movieByName);
     }else{
        return res.status(404).json("No se han encontrado characters con ese name");
     }

  }catch(error){
     return res.status(409).json({error:"Error durante la busqueda",
  message: error.message});
  };
};

//? -------------------------------------------------------
//!--------------------- PATCH - UPDATE --------------------
//? -------------------------------------------------------  
//Vamos a hacer una función que nos actualiza los datos que le pidamos

const update = async (req, res, next) => {
  try {
    
     //Sincronizamos los indexes
     await Movie.syncIndexes();

     //Desectructuramos el id del character que vamos a actualizar
     const { id } = req.params;

     //Una vez que tenemos el id buscamos el character 

     const movieById = await Movie.findById(id);

     //Hacemos un condicional, si el elemento existe  se puede actualizar
     //si no, no
        if (movieById) {
           
           //Creamos un bodycustom con los datos(si los hay) del body
           //El id es el mismo que se guarda con los datos del body
           //Si lo vemos en la response se guarda como _id
           //El name viene por el req.body
           //hago ternarios. Si existe la nueva me la pones, 
           //si no, me dejas la antigua
           //Meto tb los optional chaining por si hay laguna que no existe, que no me rompa

           const bodyCustom = {
              _id: movieById._id,
              name: req.body?.name ? req.body?.name : movieById.name,
              year: req.body?.year ? req.body?.year : movieById.year
            };
      
                                
            //Ya tenemos el customBOdy creado
            try {
              // buscamos por id el Character y lo actualizamos con el customBody
              await Movie.findByIdAndUpdate(id, bodyCustom);
      
             
      
              // ---------------------------------------------------------------- 
              //TESTEAMOS EN TIEMPO REAL QUE ESTO SE HAYA REALIZADO CORRECTAMENTE 
              //---------------------------------------------------------------- 
      
              // Buscamos el elemento character YA actualizado mediante el id
              const movieByIdUpdate = await Movie.findById(id);
      
              // Cogemos el req.body y le sacamos las CLAVES para saber que elementos han actualizado
              const elementUpdate = Object.keys(req.body);
      
              // Creamos un objeto vacío donde vamos a meter este test
              let test = {};
      
              // Recorremos las claves del body y rellenamos el objeto test
      
              elementUpdate.forEach((item) => {
                // Por cada item compruebo esi las claves del body coinciden
                // con las del character actualizado y devuelvo un true 
                //o en caso contrario un false

                if (req.body[item] === movieByIdUpdate[item]) {
                  test[item] = true;
                } else {
                  test[item] = false;
                }
              });
      
            
      
              // Comprobamos que ninguna clave del test este en false con un contador
                     
              let acc = 0;
      
              for (const key in test) {
                // Recorremos test, que es un objeto, con un for in
                //si esto es false añadimos uno al contador
                test[key] === false && acc++;
              }
              // HAcemos un condicional para comprobar si hay algun false
              //si hay alguno lanzamos un 409 porque alguna clave no se ha actualizado de forma correcta 
              // si estan todas en true lanzamos un 200 de que esta todo correcto
             
      
              if (acc > 0) {
                return res.status(409).json({ dataTest: test, update: false });
              } else {
                return res
                  .status(200)
                  .json({ dataTest: test, update: movieByIdUpdate });
              }
            } catch (error) {
              return res.status(409).json({
                error: "No se ha podidio actualizar",
                message: error.message,
              });
            }


        } else {
           // respuesta si el character no existe
           return res.status(404).json("La movie no ha sido encontrada");
        }

  } catch(error) {
     //Este es el error cuando no podemos actualizar los datos
     return res
     .status(409)
     .json({ error: "No se ha podidio actualizar", message: error.message });
  };
};








//? -------------------------------------------------------
//!--------------------- PATCH - TOGGLE --------------------
//? -------------------------------------------------------

//Hacemos un toggle character para meter o quitar charcacters
//Si lo tengo, me lo quitas, si no lo tengo, me lo añades

const toggleCharacters = async (req, res, next) => {
  try {
    // cogemos el id de los params
    const { id } = req.params;

    // Recogemos los characters del body
    const { characters } = req.body; 
    // --> esto devuelve un array de id ["12343432", "72369469367"]
    console.log("characters", characters);

    // Buscamos la pelicula a actualizar por el id

    const movieById = await Movie.findById(id);

    // Comprobamos si esta movie existe en la db y sino lanzamos un 404
    if (movieById) {
      // Cogemos lo traido por req.body y lo convertimos en array 
      //método .split(",") --> js
      // Separando las posiciones del string con comas
      
      const arrayCharacters = characters.split(",");

      console.log("array characters", arrayCharacters);

      // Recorremos el array de characters que son Id para comprobar 
      //si estan en la movie (sacarlos) o sino estan (meterlos)
      // Lo metemos en una promesa debido al mapeo que es asincrono y asi no tenemos problemas
      //Hasta que no termines de hacer el mapeo, no lo hagas
      Promise.all(
        arrayCharacters.map(async (character) => {
          if (movieById.characters.includes(character)) {
            // Si lo incluye hay que quitarlo ( character al array de characters de movie)
            
            try {
              // buscamos la movie que queremos actualizar
              await Movie.findByIdAndUpdate(id, {
                // quitamos el character del array de characters
                //con el metodo $pull de mongoose
                $pull: { characters: character },
              });

              try {
                // Buscamos el character y le quitamos la movie
                await Character.findByIdAndUpdate(character, {
                  $pull: { movies: id },
                });
              } catch (error) {
                return res.status(409).json({
                  error: "Error al actualizar el character, quitarle la movie",
                  message: error.message,
                });
              }
            } catch (error) {
              return res.status(409).json({
                error: "Error al actualizar la movie, quitarle el character",
                message: error.message,
              });
            }
          } else {
            // Si no lo incluye lo añadimos (character al array de characters de movie)
          
            try {
              // buscamos la movie y le añadimos el character
              //con el metodo $push de mongoose
              await Movie.findByIdAndUpdate(id, {
                $push: { characters: character },
              });

              try {
                // Buscamos el character y le añadimos la movie

                await Character.findByIdAndUpdate(character, {
                  $push: { movies: id },
                });
              } catch (error) {
                return res.status(409).json({
                  error: "Error al actualizar el character, añadirle la movie",
                  message: error.message,
                });
              }
            } catch (error) {
              return res.status(409).json({
                error: "Error al actualizar la movie, al añadirle el character",
                message: error.message,
              });
            }
          }
        })
      ).then(async () => {
        return res
          .status(200)
          .json(await Movie.findById(id).populate("characters"));
      });
    } else {
      // Lanzamos un 404 porque no existe la pelicula a actualizar
      return res.status(404).json("Movie no encontrada, prueba con otro id");
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error al actualizar la movie", message: error.message });
  }
};

//? -------------------------------------------------------
//!--------------------- DELETE --------------------
//? -------------------------------------------------------

// Borramos la movie cuyo ID traemos por params --> 
//Para no tener INCONISTENCIA de datos  
//hay que borrar el registro de este id en los campos donde aparece


const deleteMovie = async (req, res, next) => {
  try {
    // cogemos el id de los params
    const { id } = req.params;

    // buscamos y borramos la movie
    const movie = await Movie.findByIdAndDelete(id);
    
    if (movie) {
      // Si existe el character --> borramos los registros donde aparece
      // comprobamos si ese character ha sido borrado
      //Buscamos los characters que hemos borrado por id
      const movieDelete = await Movie.findById(id);

      // borramos los registros de character en los arrays de movie donde aparece

      try {
        // UpdateMany --> actualiza todos los registros que contengan en character el id
        // 1º parametro es el filtro de los character que tienn el id
        // 2º acción --> (con $pull) sacar de characters el id de ese Character borrado
        await Character.updateMany(
          { movie: id },
          { $pull: { movies: id } }
        );

     

        // Lanzamos una respuesta dependiendo de si se ha encontrado la movie borrada
        //hago un ternario. Si existe movie delete es que no se ha borrado
        //Lanzo un error
        //Si no se encuentra es que esta OK
        return res.status(movieDelete ? 409 : 200).json({
          deleteTest: movieDelete ? false : true,
        });
      } catch (error) {
        //Si me da un 409 es que no se ha borrado y entonces  lanzo el error
        return res.status(409).json({
          error: "Error al borrar la movie",
          message: error.message,
        });
      }
    } else {
      // lanzamos una respuesta 404 que la movie no ha sido encontrado
      //Viene del if, en el que te ponia la condicion de que existiera el caharacter
      return res.status(404).json("La movie no ha sido encontrada");
    }
  } catch (error) {
     //Este error viene del primer try, enel que hemos intentado borrar la movie
    return res.status(409).json({
      error: "Error al borrar la movie",
      message: error.message,
    });
  }
};




module.exports = { 
  createMovie,
  toggleCharacters, 
  getAll, 
  getById, 
  getByName, 
  update,
  deleteMovie 
};