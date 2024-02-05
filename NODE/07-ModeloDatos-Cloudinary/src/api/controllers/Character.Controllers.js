//Vamos a crear un controlador que nos va a crear un Character
//Usaremos insomnia, metemos el path y creamos la solicitud
//Nuestra base de datos se va a llenar

// Traemos la funcion de borrado de imagenes por si el usuario al subir
// un nuevo character tiene un error que esa imagen se borre

const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const enumOk = require("../../utils/enumOk");

//Nos traemos el modelo creado anteriormente

const Character = require("../models/Character.model");
const Movie = require("../models/Movie.model");

//Creamos una función asíncrona create y post 

const create = async (req, res, next) =>{
    //Si tenemos una imagen que nos viene por el req.file la guardamos 
    //se guarda en el req.file que es un objeto, en la clave path
    //Le ponemos el optional chaining para que no rompa si no hay imagen
    let cathImg = req.file?.path;

    try {
        //Actualizar indexes
        //Con el try catch hacemos los indexes que son los indices propios
        //de los datos(claves únicas), para que si hay un modificado posterior 
        //a la creación del controlador no se modifique
        await Character.syncIndexes();
        const newCharacter = new Character(req.body);
         // Comprobamos si hay imagen para añadirla al Character creado
         //aqui requerimos el body, que son  los datos que se han metido en insomnia y que
         //corresponden al resto del esquema.
         if (cathImg) {
            newCharacter.image = cathImg;
         } else{
            //si no hay imagen metemos una  por defecto
            newCharacter.image = "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1706026499/icono_usuario_xdy2ts.jpg";
         };

         //Ahora guardamos el character creado
         const saveCharacter = await newCharacter. save();

         //Comprobamos si se ha guaradado el character creado para lanzar una respuesta
         if (saveCharacter) {
            //si se ha guardado lanzamos una respuesta correcta con los datos de Character generados
            return res.status(200).json(saveCharacter);
         } else {
            //Si no se ha guardado hay un error y lo lanzamos en la respuesta
            return res
            .status(404).json("No se ha guardado en la base de datos");
         }
    } catch (error) {
            //Solo entramos en el catch cuando ha habido un error
            //SI HA HABIDO UN ERROR -----
            //Tenemos que borrar la imagen en cloudinary 
            //porque se sube antes de que nos metamos en el controlador--->
            // porque es un middleware que está entre la peticion del cliente y el controlador
            // comprobar si hay imagen en req.file porqe si es asi 
            //se ha subido a cloudinary y hay que borrarla
        req.file?.path && deleteImgCloudinary(cathImg);
        next (error);
        return res.status(409).json("Error en la creacion del Character");
    }
};



//? -------------------------------------------------------
//!--------------------- GET - GET ALL --------------------
//? -------------------------------------------------------
//Heacemos una función que nos devuelve todos los characters
// Los controladores son todos asíncronos

const getAll = async (req, res, next) => {
   try {
      //Encontramos TODOS los elementos de la colección con el find() de mongoose
      //que nos devuelve un ARRAY con todos los elementos coincidentes
      const allCharacter = await Character.find();
      //Hacemos un condicional 
      //en el que valoramos si el array tiene logitud > 0
      //Si hay registros devuelveme un 200 y todos los characters encontrados
      //Si no devuelveme un 404 y un json diciendo que no se han encontrado personajes
      if (allCharacter.length > 0) {
         return res.status(200).json(allCharacter);         
      } else {
         return  res.status(404).json("No se han encontrado characters");
      }
   }
   catch (error) {
      //Capturamos el error si no encuentra los characters
      return res.status(409).json({error:"Error al buscar personajes", message:error.message});
   };
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
      const characterById = await Character.findById(id).populate("movies");
      //Comprobamos si se ha encontrado el character
     
      if (characterById) {
         return res.status(200).json(characterById);
      } else {
         return res.status(404).json("No se ha encontrado el character");
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
      const charactersByName = await Character.find({name});
      console.log(charactersByName);
      //Hacemos un condicional con la longitud del array
      //en el que hemos ido metiendo los nombres con el find
      //Si es >0  lo ha encontrado, si no es que no existe
      if(charactersByName.length>0) {
         return res.status(200).json(charactersByName);
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
      //Comprobamos si en la solicitud hay una imagen
      //Si la hay nos la pueden cambiar 
      //Ponmeos un optional chaining para que no rompa si no hay imagen
      let catchImage = req.file?.path;
      //Sincronizamos los indexes
      await Character.syncIndexes();

      //Desectructuramos el id del character que vamos a actualizar
      const { id } = req.params;

      //Una vez que tenemos el id buscamos el character 

      const characterById = await Character.findById(id);

      //Hacemos un condicional, si el elemento existe  se puede actualizar
      //si no, no
         if (characterById) {
            //guardamos la imagen que tiene el character en la base de datos
            //para posteriormente identificarla y  si hace falta borrarla de cloudinary
            const oldImage = characterById.image;
            //Creamos un bodycustom con los datos(si los hay) del body
            //El id es el mismo que se guarda con los datos del body
            //Si lo vemos en la response se guarda como _id
            //La imagen, si hay, viene por req.file
            //El name viene por el req.body
            //hago ternarios. Si existe la nueva me la pones, 
            //si no, me dejas la antigua
            //Meto tb los optional chaining por si hay laguna que no existe, que no me rompa

            const bodyCustom = {
               _id: characterById._id,
               image: req.file?.path ? catchImage : oldImage,
               name: req.body?.name ? req.body?.name : characterById.name,
             };
       
             // comprobamos si recibimos por el body el genero
             //Este lo sacamos fuera porque necesitamos incluir 
             //una funcion que nos asegure que que trae una de las tres opciones
             //indicadas en enum
             //esa funcion la voy a definir en utils: enumOk.js
             
             if (req.body?.gender) {
               // Si lo recibimos llamamos a la función de utils que valida el genero
               //ternario. Si tengo uno nuevo me lo pones, si no me  dejas el antiguo
               const resultEnumOk = enumOk(req.body?.gender);
               bodyCustom.gender = resultEnumOk.check
                 ? req.body?.gender
                 : characterById.gender;
             };
             //Ya tenemos el customBOdy creado
             try {
               // buscamos por id el Character y lo actualizamos con el customBody
               await Character.findByIdAndUpdate(id, bodyCustom);
       
               // Miramos si han actualizado la imagen por si esto es asi, borrar la antigua
               if (req.file?.path) {
                 // Si la imagen antigua es diferente a la que ponemos por defecto la borramos
                 oldImage !==
                   "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png" &&
                   deleteImgCloudinary(oldImage);
               }
       
               // ---------------------------------------------------------------- 
               //TESTEAMOS EN TIEMPO REAL QUE ESTO SE HAYA REALIZADO CORRECTAMENTE 
               //---------------------------------------------------------------- 
       
               // Buscamos el elemento character YA actualizado mediante el id
               const characterByIdUpdate = await Character.findById(id);
       
               // Cogemos el req.body y le sacamos las CLAVES para saber que elementos han actualizado
               const elementUpdate = Object.keys(req.body);
       
               // Creamos un objeto vacío donde vamos a meter este test
               let test = {};
       
               // Recorremos las claves del body y rellenamos el objeto test
       
               elementUpdate.forEach((item) => {
                 // Por cada item compruebo esi las claves del body coinciden
                 // con las del character actualizado y devuelvo un true 
                 //o en caso contrario un false

                 if (req.body[item] === characterByIdUpdate[item]) {
                   test[item] = true;
                 } else {
                   test[item] = false;
                 }
               });
       
               // Comprobamos que la imagen del caracter Actualizado coincide con la imagen nueva si la hay
               // Si coinciden creamos una copia de test 
               //con una nueva clave que será file en true y sino estará en false
               if (catchImage) {
                 characterByIdUpdate.image === catchImage
                   ? (test = { ...test, file: true })
                   : (test = { ...test, file: false });
               }
       
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
                   .json({ dataTest: test, update: characterByIdUpdate });
               }
             } catch (error) {
               return res.status(409).json({
                 error: "No se ha podidio actualizar",
                 message: error.message,
               });
             }


         } else {
            // respuesta si el character no existe
            return res.status(404).json("El character no ha sido encontrado");
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

//Hacemos un toggle moovie para meter o quitar movies
//Si lo tengo, me lo quitas, si no lo tengo, me lo añades

const toggleMovies = async (req, res, next) => {
   try {
     // cogemos el id de los params
     const { id } = req.params;
 
     // Recogemos las movies del body
     const { movies } = req.body; 
     // --> esto devuelve un array de id ["12343432", "72369469367"]
     console.log("movies", movies);
 
     // Buscamos el character a actualizar por el id
 
     const characterById = await Character.findById(id);
 
     // Comprobamos si esta movie existe en la db y sino lanzamos un 404
     if (characterById) {
       // Cogemos lo traido por req.body y lo convertimos en array 
       //método .split(",") --> js
       // Separando las posiciones del string con comas
       
       const arrayMovies = movies.split(",");
 
       console.log("array movies", arrayMovies);
 
       // Recorremos el array de movies que son Id para comprobar 
       //si estan en el character(sacarlos) o sino estan (meterlos)
       // Lo metemos en una promesa debido al mapeo que es asincrono y asi no tenemos problemas
       //Hasta que no termines de hacer el mapeo, no lo hagas
       Promise.all(
         arrayMovies.map(async (movie) => {
           if (characterById.movies.includes(movie)) {
             // Si lo incluye hay que quitarlo ( movie al array de movie de character)
             
             try {
               // buscamos el character que queremos actualizar
               await Character.findByIdAndUpdate(id, {
                 // quitamos la movie del array de movies
                 //con el metodo $pull de mongoose
                 $pull: { movies: movie },
               });
 
               try {
                 // Buscamos la movie y le quitamos el character
                 await Movie.findByIdAndUpdate(movie, {
                   $pull: { character: id },
                 });
               } catch (error) {
                 return res.status(409).json({
                   error: "Error al actualizar la movie, quitarle el character",
                   message: error.message,
                 });
               }
             } catch (error) {
               return res.status(409).json({
                 error: "Error al actualizar el character, quitarle la movie",
                 message: error.message,
               });
             }
           } else {
             // Si no lo incluye lo añadimos 
           
             try {
               // buscamos el character y le añadimos la movie
               //con el metodo $push de mongoose
               await Character.findByIdAndUpdate(id, {
                 $push: { movies: movie },
               });
 
               try {
                 // Buscamos el character y le añadimos la movie
 
                 await Movie.findByIdAndUpdate(movie, {
                   $push: { character: id },
                 });
               } catch (error) {
                 return res.status(409).json({
                   error: "Error al actualizar la movie, añadirle el character",
                   message: error.message,
                 });
               }
             } catch (error) {
               return res.status(409).json({
                 error: "Error al actualizar el character, añadirle la movie",
                 message: error.message,
               });
             }
           }
         })
       ).then(async () => {
         return res
           .status(200)
           .json(await Character.findById(id).populate("movies"));
       });
     } else {
       // Lanzamos un 404 porque no existe la pelicula a actualizar
       return res.status(404).json("Character no encontrado, prueba con otro id");
     }
   } catch (error) {
     return res
       .status(409)
       .json({ error: "Error al actualizar el character", message: error.message });
   }
 };


//? -------------------------------------------------------
//!--------------------- DELETE --------------------
//? -------------------------------------------------------

// Borramos el character cuyo ID traemos por params --> 
//Para no tener INCONISTENCIA de datos  
//hay que borrar el registro de este id en los campos donde aparece
// en este caso aparece en el array de characters en movie

const deleteCharacter = async (req, res, next) => {
   try {
     // cogemos el id de los params
     const { id } = req.params;
 
     // buscamos y borramos el character
     const character = await Character.findByIdAndDelete(id);
     
     if (character) {
       // Si existe el character --> borramos los registros donde aparece
       // comprobamos si ese character ha sido borrado
       //Buscamos los characters que hemos borrado por id
       const characterDelete = await Character.findById(id);
 
       // borramos los registros de character en los arrays de movie donde aparece
 
       try {
         // UpdateMany --> actualiza todos los registros que contengan en character el id
         // 1º parametro es el filtro de los character que tienn el id
         // 2º acción --> (con $pull) sacar de characters el id de ese Character borrado
         await Movie.updateMany(
           { characters: id },
           { $pull: { characters: id } }
         );
 
         // verificamos que en el character borrado no tengo la imagen por defecto para borrarla
         //Le digo que me la borre de cloudinary si es diferente de la que tengo por defecto
         character.image !==
           "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png" &&
           deleteImgCloudinary(character.image);
 
         // Lanzamos una respuesta dependiendo de si se ha encontrado el character borrado
         //hago un ternario. Si existe character delete es que no se ha borrado
         //Lanzo un error
         //Si no se encuentra es que esta OK
         return res.status(characterDelete ? 409 : 200).json({
           deleteTest: characterDelete ? false : true,
         });
       } catch (error) {
         //Si me da un 409 es que no se ha borrado y entonces  lanzo el error
         return res.status(409).json({
           error: "Error al borrar el character",
           message: error.message,
         });
       }
     } else {
       // lanzamos una respuesta 404 que el character no ha sido encontrado
       //Viene del if, en el que te ponia la condicion de que existiera el caharacter
       return res.status(404).json("El character no ha sido encontrado");
     }
   } catch (error) {
      //Este error viene del primer try, enel que hemos intentado borrar el character
     return res.status(409).json({
       error: "Error al borrar el character",
       message: error.message,
     });
   }
 };


2914







module.exports = {
   create,
   getAll,
   getById,
   getByName,
   update,
   deleteCharacter,
   toggleMovies
};