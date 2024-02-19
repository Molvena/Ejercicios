//Requerimos mongoose

const mongoose = require("mongoose");
//Nos traemos de mongoose los esquemas de datos
const Schema = mongoose.Schema;

//---------> CREAMOS EL MODELO DE DATOS
//estas dos lineas podrian ponerse en una sola
//const SportsSchema = new mongoose.Schema()
const SportSchema = new Schema({
    name:{type:String, required:true, unique:true},
    modalidades:{type:String},
    olímpico: {
        type: Boolean,
        default: false,
        //sera false hasta que definamos lo contrario
      },
    image: {type: String, required: false},
    competicionesDestacadas:{type:String, required:false},
    //Ahora definimos un array de objeto que hace referencia al 
    //esquema creado en Athlete.model.js
    athletes:[{type:mongoose.Schema.Types.ObjectId, ref:"Athlete"}],
},
{
    timestamps:true
}
);

const Sport =mongoose.model("Sport", SportSchema);

module.exports = Sport;