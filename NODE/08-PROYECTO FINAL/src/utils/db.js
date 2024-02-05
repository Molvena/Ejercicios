//En este archivo vamos a hacer la conexión con mongoDB
//Requerimos dotenv y mongoose

const dotenv = require("dotenv");

const mongoose = require ("mongoose");

//Ejecutamos dotenv para poder utilizarlos
//con el metodo config()
dotenv.config();

//Nos traemos MONGO_URI de .env

const MONGO_URI = process.env.MONGO_URI;

//Creamos la función que conecta con nuestra base de datos
//Es asíncrona porque tenemos que pedir conexion a internet

const connect = async() =>{
//Usamos try/catch
//intentamos conectar y si no...

try{
    //intenta conectar con nuestra base de datos

    const db = await mongoose.connect(MONGO_URI);
    // ,{
    // // para parsear la url de MONGO
    // useNewUrlParser: true,
    // // para convertir los caracteres especiales
    // useUnifiedTopology: true,
    // });
    // Hacemos destructuring de nombre y host de nuestra base de datos

    const { name, host } = db.connection;

    console.log(
        `Conectados a la DB 👌🏾 con el nombre: ${name} en el host: ${host} `
    );

}catch(error){
    console.log("Hay en un error en la conexión ❌, ", error);
}
};

//La exportamos
module.exports = { connect };





