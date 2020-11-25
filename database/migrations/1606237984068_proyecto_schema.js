'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProyectoSchema extends Schema {
  up () {
    this.create('proyectos', (table) => {
      table.increments()
      //relación de tablas, nos va crewar un campo user_id referenciado con el id de la tabla users
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('nombre',80).notNullable() // campo de texto con 80 caracteres no nulo
      table.timestamps()
    })
  }

  down () {
    this.drop('proyectos')
  }
}

module.exports = ProyectoSchema
