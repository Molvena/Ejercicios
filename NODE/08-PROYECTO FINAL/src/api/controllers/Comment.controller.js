// --------------------------------------------------------
//?---------------------- POST- CREATE --------------------
// --------------------------------------------------------

const Athlete = require("../models/Athlete.model");
const Comment = require("../models/Comment.model");
const Sport = require("../models/Sport.model");
const User = require("../models/User.model");

const createComment = async (req, res, next) => {
  try {
    
  
    //Traemos por params, haciendo destructuring,
    //el id de a quien va dirigido el comentario
    //Ya sea un user, un athlete o un sport
    const {idRecipient} = req.params;

    //definimos una constante para cada posible destinatario del comentario
    //así despues podemos averiguar a quien va dirigido, 
    //según la existencia de la misma

    const findUser = await User.findById(idRecipient);
    const findAthlete = await Athlete.findById(idRecipient);
    const findSport = await Sport.findById(idRecipient);

    //Creamos un condicional para cada destinatario
    if(findUser) {
        //El comentario va dirigido a un User
        //Creamos nueva intancia de comment y la guardamos
        //Actualizamos el User al que va dirigido el comment
        //Actualizamos al owner

        //Instancia del nuevo comentario
        //me traigo el contenido por lo que meto en el body
        //el idRecipient viene por params
        //El owner tiene que estar autenticado, por lo que encuentro su id por el req.user
        const newComment = new Comment({
            ...req.body,
            recipientUser: idRecipient,
            owner: req.user._id
        });
        //Lo guardamos
        const savedComment = await newComment.save();
        if(savedComment) {
            //Si se ha guardado procedemos a las actualizaciones
            try {
                //Actualizamos el User al que va dirigido el comment
                await User.findByIdAndUpdate(idRecipient,{
                    $push:{commentsByOthers:newComment._id},
                });
                //Actualizamos al owner
                await User.findByIdAndUpdate(req.user_id,{
                    $push:{postedComments:newComment._id},
                });
                //Respuesta correcta
                //Le enviamos el usuario actualizado y podemos
                //popular el resto de comentarios
                //Tambien le devolvemos el comentario
                return res.status(200).json({
                    userOwner: await User.findById(req.user._id).populate(
                        "commentsByOthers postedComments"
                    ),
                    comment: newComment,
                });
             
            } catch (error) {
                //Error al actualizar el user o el owner
                return res.status(409).json({
                    error: "Error al actualizar los Users",
                    message:error.message,
                });
            }
        } else {
            //Error al guardar el comentario
            return res.status(409).json({
                error:"Error al guardar el comentario ",
                message: "No se ha guardado el comentario",
            });
        };
    } else if(findAthlete) {
        //El comentario va dirigido a un Athlete
        //Creamos nueva intancia de comment y la guardamos
        //Actualizamos el Athlete al que va dirigido el comment
        //Actualizamos al owner
        const newComment = new Comment({
            ...req.body,
            recipientAthlete: idRecipient,
            owner: req.user._id
        });
        //Lo guardamos
        const savedComment = await newComment.save();
        if(savedComment) {
            //Si se ha guardado procedemos a las actualizaciones
            try {
                //Actualizamos el Athlete al que va dirigido el comment
                await Athlete.findByIdAndUpdate(idRecipient,{
                    $push:{comments:newComment._id},
                });
                //Actualizamos al owner
                await User.findByIdAndUpdate(req.user_id,{
                    $push:{postedComments:newComment._id},
                });
                //Respuesta correcta
                
                return res.status(200).json({
                    userOwner: await User.findById(req.user._id).populate(
                        "commentsByOthers postedComments"
                    ),
                    comment: newComment,
                });
             
            } catch (error) {
                //Error al actualizar el Athlete o el owner
                return res.status(409).json({
                    error: "Error al actualizar Athlete o User",
                    message:error.message,
                });
            }
        } else {
            //Error al guardar el comentario
            return res.status(409).json({
                error:"Error al guardar el comentario ",
                message: "No se ha guardado el comentario",
            });
        };

    
    } else if(findAthlete) {
        //El comentario va dirigido a un Athlete
        //Creamos nueva intancia de comment y la guardamos
        //Actualizamos el Athlete al que va dirigido el comment
        //Actualizamos al owner
        const newComment = new Comment({
            ...req.body,
            recipientAthlete: idRecipient,
            owner: req.user._id
        });
        //Lo guardamos
        const savedComment = await newComment.save();
        if(savedComment) {
            //Si se ha guardado procedemos a las actualizaciones
            try {
                //Actualizamos el Athlete al que va dirigido el comment
                await Athlete.findByIdAndUpdate(idRecipient,{
                    $push:{comments:newComment._id},
                });
                //Actualizamos al owner
                await User.findByIdAndUpdate(req.user_id,{
                    $push:{postedComments:newComment._id},
                });
                //Respuesta correcta
                
                return res.status(200).json({
                    userOwner: await User.findById(req.user._id).populate(
                        "comments postedComments"
                    ),
                    comment: newComment,
                });
             
            } catch (error) {
                //Error al actualizar el Athlete o el owner
                return res.status(409).json({
                    error: "Error al actualizar Athlete o User",
                    message:error.message,
                });
            }
        } else {
            //Error al guardar el comentario
            return res.status(409).json({
                error:"Error al guardar el comentario ",
                message: "No se ha guardado el comentario",
            });
        };

    } else if(findSport) {
        //El comentario va dirigido a un Sport
        //Creamos nueva intancia de comment y la guardamos
        //Actualizamos el Sport al que va dirigido el comment
        //Actualizamos al owner
        const newComment = new Comment({
            ...req.body,
            recipientSport: idRecipient,
            owner: req.user_id
        });
        //Lo guardamos
        const savedComment = await newComment.save();
        if(savedComment) {
            //Si se ha guardado procedemos a las actualizaciones
            try {
                //Actualizamos el Sport al que va dirigido el comment
                await Sport.findByIdAndUpdate(idRecipient,{
                    $push:{comments:newComment._id},
                });
                //Actualizamos al owner
                await User.findByIdAndUpdate(req.user_id,{
                    $push:{postedComments:newComment._id},
                });
                //Respuesta correcta
                
                return res.status(200).json({
                    userOwner: await User.findById(req.user._id).populate(
                        "comments postedComments"
                    ),
                    comment: newComment,
                });
             
            } catch (error) {
                //Error al actualizar el Sport o el owner
                return res.status(409).json({
                    error: "Error al actualizar Sporto User",
                    message:error.message,
                });
            }
        } else {
            //Error al guardar el comentario
            return res.status(409).json({
                error:"Error al guardar el comentario ",
                message: "No se ha guardado el comentario",
            });
        };

    };
  } catch (error) {
    //Error general al crear el comentario
    return res.status(409)
    .json({error: "Error al crear el comentario", message: error.message});
  };
};

// --------------------------------------------------------
//?---------------------- DELETE --------------------------
// --------------------------------------------------------

module.exports = {createComment};

