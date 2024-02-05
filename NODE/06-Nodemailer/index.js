//IMPORTACIONES
const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

//TRAEMOS VARIABLES DE ENTORNO

const PORT = process.env.PORT;

// CONFIGURAMOS SERVIDOR WEB

const app = express();

//CONFIGURAMOS EL ROUTER

const router = express.Router();

// definimos la función que gestiona este endpoint

router.get("/sendNewMail", (req, res, next) => {
  // traemos variables de entorno para enviar email
  const EMAIL = process.env.EMAIL;
  const PASSWORD = process.env.PASSWORD;

  // Creamos la funcion que contiene el servicio y la autentificacion
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  // Creamos las diferentes opciones de nuestro mensaje

  const mailOptions = {
    from: EMAIL,
    to: "marcosbenaventgomez@gmail.com",
    subject: "Mensaje de confirmación",
    text: "Todo ok 👌🏾",
  };

  // Enviamos el email

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return next(error); // La ejecución continua, pero notifica del error
    } else {
      res.status(200).json(`Email send, ${info.response}`);
    }
  });
});

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
