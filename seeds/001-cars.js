//truncate() will delete entries and reset ID
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { VIN: "ASDF", make: "Honda", model: "Accord", mileage: 123 },
        { VIN: "QWER", make: "Chevy", model: "Volt", mileage: 1 },
        { VIN: "ZXCV", make: "Ford", model: "F350", mileage: 55555 }
      ]);
    });
};

//del() will delete entries but not reset ID

//async await
// exports.seed = async function(knex) {
//   await knex("cars").del();

//   return knex("cars").insert([
//     { VIN: "ASDF", make: "Honda", model: "Accord", mileage: 123 },
//     { VIN: "QWER", make: "Chevy", model: "Volt", mileage: 1 },
//     { VIN: "ZXCV", make: "Ford", model: "F350", mileage: 55555 }
//   ]);
// };

