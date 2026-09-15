import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'classes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.string('title').notNullable()
      table.string('description')
      table.string('instructor_name').notNullable()
      table.integer('capacity').notNullable()
      table.timestamp('start_time', { useTz: true }).notNullable()
      table.integer('duration_minutes').notNullable()
      table.string('recurrence_rule')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
