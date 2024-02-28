//En este archivo vamos a crear una función 
//que llama a archivos para subirlos a cloudinary

//Importaciones

const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } =require("multer-storage-cloudinary");
const dotenv = require("dotenv");
dotenv.config();

//Creamos el almacen
//En este caso es nuestro cloudinary y el nombre del almacen va a ser storage
//Hacemos una nueva instancia con sus opciones

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder:"Curso",
        allowedFormats:["jpg", "png","jpeg", "gif", "svg", "webp"],
    }
});

//Esto me crea una nueva carpeta en cloudinary
//Ahora hacemos una función que sube las imágenes
//con multer(libreria que facilita la subida de archivos)

const upload = multer({storage});

//Hacemos tambien una función que nos borra las imágenes
//Esta la copiamos directamente(nos viene dada)

const deleteImgCloudinary = (imgUrl) => {
  const imgSplited = imgUrl.split("/");
  const nameSplited = imgSplited[imgSplited.length - 1].split(".");
  const folderSplited = imgSplited[imgSplited.length - 2];
  const public_id = `${folderSplited}/${nameSplited[0]}`;

  cloudinary.uploader.destroy(public_id, () => {
    console.log("Image delete in cloudinary");
  });
};

  //Hacemos la función de configuración de cloudinary
  //que es la que usa las variables de entorno

  const configCloudinary =() => {
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_secret:process.env.CLOUDINARY_API_SECRET,
        api_key:process.env.CLOUDINARY_API_KEY,
    });
  };

  //Exportamos las funciones

module.exports = {upload, deleteImgCloudinary, configCloudinary};

