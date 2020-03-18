exports.up = function(knex) {
  return knex.schema.createTable("sales", tbl => {
    tbl.increments();

    tbl.float("price").notNullable();

    tbl
      .integer("car_id")
      .references("id")
      .inTable("cars");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};
