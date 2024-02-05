const  { upload } = require("../../middleware/files.middleware");
const  {
    registerWithRedirect, 
    sendCode,
    resendCode,
    checkNewUser
} = require("../controllers/User.controllers");

const UserRoutes = require("express").Router();

UserRoutes.post( "/registerRedirect",
upload.single("image"), registerWithRedirect);

UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);

//Controladores usados con redirect

UserRoutes.post("/register/sendMail/:id", sendCode);

module.exports = UserRoutes;
