const { isAuth } = require("../../middleware/auth.middleware");
const  { upload } = require("../../middleware/files.middleware");
const  {
    registerWithRedirect, 
    sendCode,
    resendCode,
    checkNewUser,
    login,
    sendPassword,
    forgotPassword,
    autoLogin,
    changePassword,
    updateUser,
    deleteUser
} = require("../controllers/User.controllers");

const UserRoutes = require("express").Router();

UserRoutes.post( "/registerRedirect",
upload.single("image"), registerWithRedirect);

UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);

UserRoutes.post("/login", login);
UserRoutes.post("/autoLogin", autoLogin);

UserRoutes.patch("/forgotPassword", forgotPassword); // redirect sendPassword

//Rutas autenticadas
UserRoutes.patch("/changePassword", [isAuth], changePassword);
UserRoutes.patch("/update", [isAuth], upload.single("image"), updateUser);
UserRoutes.delete("/delete", [isAuth], deleteUser);





//Controladores usados con redirect
UserRoutes.post("/register/sendMail/:id", sendCode);
UserRoutes.patch("/forgot/sendPassword/:id", sendPassword);
//Es un patch porque actualiza al usuario








module.exports = UserRoutes;
