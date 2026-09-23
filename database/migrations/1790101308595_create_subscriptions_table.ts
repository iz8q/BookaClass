import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'subscriptions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').references('users.id').onDelete('CASCADE').notNullable()
      table.string('stripe_subscriptions_id').unique().notNullable()
      table.string('plan').notNullable()
      table.timestamp('current_period_end', { useTz: true }).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
