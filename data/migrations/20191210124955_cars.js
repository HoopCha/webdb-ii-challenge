exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        //primary key, called id, an integer, auto-increments
        tbl.increments();
        tbl.integer('vin').unique().notNullable();
        tbl.string('make').notNullable();
        tbl.string('model').notNullable();
        tbl.integer('mileage').notNullable()
        tbl.text('transmission')
        tbl.text('title_status')
    })
  };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
