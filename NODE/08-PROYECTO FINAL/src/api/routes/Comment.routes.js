const express = require("express");
const { createComment, getAllComments } = require("../controllers/Comment.controller");
const { isAuth } = require("../../middleware/auth.middleware");

const CommentRoutes = express.Router();

CommentRoutes.post("/create/:idRecipient", [isAuth], createComment);
CommentRoutes.get("/getAll", getAllComments);

module.exports = CommentRoutes;