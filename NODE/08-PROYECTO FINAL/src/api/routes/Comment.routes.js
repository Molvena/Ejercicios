const express = require("express");
const { createComment } = require("../controllers/Comment.controller");
const { isAuth } = require("../../middleware/auth.middleware");

const CommentRoutes = express.Router();

CommentRoutes.post("/create/:idRecipient", [isAuth], createComment);

module.exports = CommentRoutes;