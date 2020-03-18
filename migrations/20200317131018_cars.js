exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    //   VIN, make, model, and mileage.
    tbl
      .string("VIN", 255)
      .notNullable()
      .unique()
      .index();

    tbl
      .text("make")
      .notNullable()
      .index();

    tbl
      .text("model")
      .notNullable()
      .index();

    tbl
      .integer("mileage")
      .notNullable()
      .index();

    tbl.string("transmission_type", 255).index();

    tbl.string("status_of_title", 255).index();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
