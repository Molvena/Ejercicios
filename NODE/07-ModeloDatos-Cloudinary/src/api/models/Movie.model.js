//Requerimos mongoose
const mongoose = require("mongoose");

//Creamos el modelo de datos de las películas
//Nos saltamos el paso de definir la constante aisladda
//y lo definimos todo en una sola línea
//Si no seria const Schema = mongoose.Schema
//const MovieSchema = new Shema

const MovieSchema =new mongoose.Schema(
    {
        name:{type: String, required: true, uniqeu: true},
        year:{type: Number, require: true},
        //Ahora definimos un array de objeto que hace referencia al 
        //esquema creadoi en Movie.model.js
        characters: [{type: mongoose.Schema.Types.ObjectId, ref:"Character"}], 
    },
    {
        //Si queremos que salga la fecha de creación usamos typestamp
        timestamp:true,
    }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;