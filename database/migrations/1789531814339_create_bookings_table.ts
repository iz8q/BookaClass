import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bookings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.integer('user_id').references('users.id').onDelete('CASCADE').notNullable()
      table.integer('class_id').references('classes.id').onDelete('CASCADE').notNullable()
      table.date('occurrence_date').notNullable()
      table.string('status').notNullable()
      table.unique(['user_id', 'class_id', 'occurrence_date'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
