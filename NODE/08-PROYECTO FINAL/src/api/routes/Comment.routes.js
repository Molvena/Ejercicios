const express = require("express");
const { createComment, getAllComments, deleteComment } = require("../controllers/Comment.controller");
const { isAuth } = require("../../middleware/auth.middleware");

const CommentRoutes = express.Router();

CommentRoutes.post("/create/:idRecipient", [isAuth], createComment);
CommentRoutes.get("/getAll", getAllComments);
CommentRoutes.delete("/delete/:id", deleteComment);

module.exports = CommentRoutes;