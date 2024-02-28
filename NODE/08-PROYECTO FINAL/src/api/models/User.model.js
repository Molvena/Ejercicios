//Requerimos mongoose 

const mongoose = require("mongoose");

//REquerimos bcrypt para encriptar
//y validator para validar mail y contraseña
 const bcrypt = require("bcrypt");
 const validator = require("validator");

//Hacemos el esquema de datos
//Nos lo traemos de mongoose y lo ejecutamos en un solo paso


const UserSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        required: true,
        trim: true, // quitar espacios
        unique: true, //que no haya dos usuarios con el mismo email
        validate: [validator.isEmail, "Email no válido"],
        //validamos el email y si no podemos validarlo mandamos el mensaje de no válido
      },
      name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        trim: true,
        validate: [validator.isStrongPassword], 
        //tiene que cumplir las caracteríaticas de strong
        // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, 
        //minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, 
        //pointsForContainingLower: 10, pointsForContainingUpper: 10, 
        //pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
      },
      gender: {
        type: String,
        enum: ["hombre", "mujer", "otro"],
        required: true,
      },
      rol: {
        type: String,
        enum: ["admin", "user", "superAdmin"],
        default: "user",
      },
      confirmationCode: {
        type: Number,
        required: true,
      },
      check: {
        type: Boolean,
        default: false,
        //sera false hata que autentifiquemos la contraseña
      },
      image: {
        type: String,
      },
      //Añadimos id de los Athletes que el user ha dado a me gusta
      athletesFav:[{type: mongoose.Schema.Types.ObjectId, ref: "Athlete"}],

      //Añadimos id de los Sports que el user ha dado a me gusta
      sportsFav:[{type:mongoose.Schema.Types.ObjectId, ref: "Sport"}],

      //Añadimos id de otros users que siguen a este user
      followers: [{type: mongoose.Schema.Types.ObjectId, ref:"User"}],

      //Añadimos id de otros users seguidos por este este user
      followed: [{type: mongoose.Schema.Types.ObjectId, ref:"User"}],

      //Añadimos id de comentarios que otros users han realizado  a este user
      commentsByOthers: [{type: mongoose.Schema.Types.ObjectId, ref:"Comment"}],

      //Añadimos id de comentarios que este  user ha realizado a otros users
      postedComments: [{type: mongoose.Schema.Types.ObjectId, ref:"Comment"}],

      //Añadimos id de los comments a los que el user ha dado a me gusta
      commentsFav:[{type:mongoose.Schema.Types.ObjectId, ref: "Comment"}],

    },
    {
        //para que salga la fecha de creación
      timestamps: true,
    }
  );
  
//Ahora creamos una función de preguardado, 
//en ella vamos a encriptar la contraseña antes de su guardado
//Usamos de la librería bcrypt .pre y .hash
//usamos function porque tenemos que usar this
//Le damos 10 vueltas
UserSchema.pre("save", async function (next) {
    try {
      this.password = await bcrypt.hash(this.password, 10);
      next();
    } catch (error) {
      next("Error encriptando la contraseña", error);
    }
  });

  //Creamos el modelo en base al esquema

  const User = mongoose.model("User", UserSchema);

  //Exportamos el modelo para poder usarlo

  module.exports = User;