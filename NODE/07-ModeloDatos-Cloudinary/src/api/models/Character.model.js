//Aqui de finimos los modelos, que son las estructuras
//de nuestras colecciones
//pe en una coleccion de libros tendremos autor, num paginas y título

//Requerimos mongoose

const mongoose = require("mongoose");

//Nos traemos de mongoose  los esquemas de datos

const Schema = mongoose.Schema;

//---------> CREAMOS EL MODELO DE DATOS
// Tenemos que poner a cada clave el tipo de dato
// Definimos otras propiedades que limitan la información 
//que se puede incluir esa clase --->
// si es obligatoria , longitud maxima, minima.....

const CharacterSchema = new Schema(
    {
        name:{type: String, required:false, unique:false},
        gender:{
            type: String,
            enum:["hombre", "mujer", "otro"],
            required:false,
        },
        image: { type: String, required: false },
        //Ahora definimos un array de objeto que hace referencia al 
        //esquema creado en Movie.model.js
        movies:[{type:mongoose.Schema.Types.ObjectId, ref:"Movie"}],
    },
    //Si queremos que salga la fecha de creación usamos typestamp
    {
    timestamps: true,
    }
);

//Con la definición de datos y su esquema vamos a definir
//nuestro modelo Character

const Character = mongoose.model("Character", CharacterSchema);

//exportamos el modelo

module.exports = Character;

