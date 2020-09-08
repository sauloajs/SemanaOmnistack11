
exports.up = function(knex) {
  return knex.schema.createTable('ong', function(table) {
      table.string('id').primary();
      table.string('name');
      table.string('email');
      table.string('city');
      table.string('uf');
      table.string('whatsapp');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ong');
};
