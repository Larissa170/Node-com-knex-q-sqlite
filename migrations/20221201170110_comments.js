export const up = function (knex) {
	return knex.schema.createTable("comments", (column) => {
		column.increments("id").primary();
		column.string("author");
		column.string("comment");
		column.string("post_id");
		column.timestamps(false, true);
	});
};

export const down = function (knex) {
	return knex.schema.dropTableIfExists("comments");
};
