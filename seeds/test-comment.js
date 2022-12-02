/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("comments").del();
	await knex("comments").insert([
		{ id: 1, author: "Laura", comment: "muito bom", post_id: "2" },
		{ id: 2, author: "Luiz", comment: "muito ruim", post_id: "1" },
		{ id: 3, author: "Lili", comment: "chato", post_id: "3" },
	]);
};
