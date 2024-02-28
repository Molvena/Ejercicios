//Aqui definimos los modelos, que son las estructuras
//de nuestras colecciones

//Requerimos mongoose

const mongoose = require("mongoose");

//Nos traemos de mongoose los esquemas de datos
const Schema = mongoose.Schema;

//---------> CREAMOS EL MODELO DE DATOS
// Tenemos que poner a cada clave el tipo de dato
// Definimos otras propiedades que limitan la información 
//que se puede incluir esa clase --->
// si es obligatoria , longitud maxima, minima.....

const AthleteSchema = new Schema(
    {
        name:{type:String, required:true, unique:false},
        gender:{
            type:String,
            enum:["hombre","mujer", "otro"],
            required:false,
        },
        year:{type:Number, required: true},
        country:{type:String, required:false},
        image:{type:String, required:false},
         //Ahora definimos un array de objeto que hace referencia al 
        //esquema creado en Sport.model.js
        sports:[{type:mongoose.Schema.Types.ObjectId, ref:"Sport"}],
        activo: {
            type: Boolean,
            default: true,
        },
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],

    },
    {
        timestamps:true, 
    }
);

//Con la definición de datos y su esquema vamos a definir
//nuestro modelo Athlete

const Athlete = mongoose.model("Athlete",AthleteSchema);

//Exportamos el modelo

module.exports = Athlete;

