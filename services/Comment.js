import { db } from "../connection/db.js";

export const TABLE_NAME = "comments";

export const Comment = {
	findAll() {
		return db(TABLE_NAME).select("*");
	},
	insert(comment) {
		return db(TABLE_NAME).insert(comment);
	},
};
