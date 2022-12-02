import express from "express";
const router = express.Router();
import { Comment } from "../services/Comment.js";

/* GET home page. */
router.get("/", function (req, res) {
	Comment.findAll().then(function (comments) {
		res.render("comment", { comments });
	});
});

router.post("/", function (req, res) {
	const { body } = req;
	Comment.insert(body).then(function (comment) {
		res.json(comment);
	});
});

export default router;
