
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 12345, make: 'Honda', model: 'CRV', mileage: 195000, transmission: 'manual', title_status: "clean"},
        {vin: 54321, make: 'Tesla', model: '3', mileage: 50, transmission: 'automatic', title_status: "salvage"}
      ]);
    });
};
