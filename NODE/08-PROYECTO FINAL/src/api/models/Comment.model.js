//Requerimos mongoose
const mongoose = require("mongoose");

//Traemos el esquema de mongoose
const Schema = mongoose.Schema;

//Creamos el esquema de datos
//El comentario solo puede ir dirigido a un registro, 
//Ya sea un user, athlete o sport

const CommentSchema = new Schema(
    {
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        content:{ type:String , required:true },
        // Array de ids de user que les gusta el comentario
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

        // Si va dirigido a un Athlete:
        // Id del Athlete al que va dirigido el comentario
        recipientAthlete: {
            type:mongoose.Schema.Types.ObjectId, 
            ref:"Athlete"
        },
        // Si va dirigido a un Sport:
        // Id del USer al que va dirigido el comentario
        recipientSport: {
            type:mongoose.Schema.Types.ObjectId, 
            ref:"Sport"
        },
        // Si va dirigido a un User:
        // Id del Sport al que va dirigido el comentario
        recipientUser: {
            type:mongoose.Schema.Types.ObjectId, 
            ref:"User"
        },
    },
    {timestamps: true}
);

// creamos el modelo con la definición de datos y su esquema
const Comment = mongoose.model("Comment", CommentSchema);

//exportamos el modelo 
module.exports = Comment;